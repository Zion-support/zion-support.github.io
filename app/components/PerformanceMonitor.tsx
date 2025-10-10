'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  domContentLoaded?: number;
  loadComplete?: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('performance-monitoring') === 'true';
    
    if (!shouldShow) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
        
        // Time to First Byte
        ttfb: navigation.responseStart - navigation.requestStart,
      };

      // Web Vitals (if available)
      if ('web-vitals' in window) {
        // These would be set by web-vitals library
        const vitals = (window as any).webVitals;
        if (vitals) {
          newMetrics.lcp = vitals.lcp;
          newMetrics.fid = vitals.fid;
          newMetrics.cls = vitals.cls;
          newMetrics.fcp = vitals.fcp;
        }
      }

      setMetrics(newMetrics);
      setIsVisible(true);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Measure on visibility change (for SPA navigation)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        measurePerformance();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && localStorage.getItem('performance-monitoring') !== 'true') {
    return null;
  }

  if (!isVisible) return null;

  const formatMetric = (value?: number) => {
    if (value === undefined) return 'N/A';
    return `${Math.round(value)}ms`;
  };

  const getPerformanceGrade = (metric: keyof PerformanceMetrics) => {
    const value = metrics[metric];
    if (value === undefined) return 'N/A';
    
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';
      case 'fid':
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';
      case 'cls':
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';
      case 'fcp':
        return value <= 1800 ? 'Good' : value <= 3000 ? 'Needs Improvement' : 'Poor';
      case 'ttfb':
        return value <= 800 ? 'Good' : value <= 1800 ? 'Needs Improvement' : 'Poor';
      default:
        return 'N/A';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'Good': return 'text-green-400';
      case 'Needs Improvement': return 'text-yellow-400';
      case 'Poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {Object.entries(metrics).map(([key, value]) => {
          const grade = getPerformanceGrade(key as keyof PerformanceMetrics);
          return (
            <div key={key} className="flex justify-between items-center">
              <span className="text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}:
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-white">{formatMetric(value)}</span>
                <span className={`text-xs ${getGradeColor(grade)}`}>
                  {grade}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-700">
        <div className="text-xs text-gray-400">
          Press F12 to toggle
        </div>
      </div>
    </div>
  );
};

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;