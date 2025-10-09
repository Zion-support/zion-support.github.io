import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Eye } from 'lucide-react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if user has enabled debug mode
    const isDebugMode = localStorage.getItem('debug-mode') === 'true';
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    if (!isDebugMode && !isDevelopment) return;

    setIsVisible(true);

    // Monitor Core Web Vitals
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return;

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (entry as any).value 
              }));
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }

      // Measure TTFB
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigation.responseStart - navigation.requestStart 
        }));
      }
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number, unit: string = 'ms') => {
    return `${Math.round(value)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="cyber-card p-4 max-w-xs">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-semibold text-white">Performance</h3>
        </div>
        
        <div className="space-y-2 text-xs">
          {metrics.fcp && (
            <div className="flex justify-between items-center">
              <span className="text-gray-300">FCP</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                {formatValue(metrics.fcp)}
              </span>
            </div>
          )}
          
          {metrics.lcp && (
            <div className="flex justify-between items-center">
              <span className="text-gray-300">LCP</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                {formatValue(metrics.lcp)}
              </span>
            </div>
          )}
          
          {metrics.fid && (
            <div className="flex justify-between items-center">
              <span className="text-gray-300">FID</span>
              <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
                {formatValue(metrics.fid)}
              </span>
            </div>
          )}
          
          {metrics.cls !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-gray-300">CLS</span>
              <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          )}
          
          {metrics.ttfb && (
            <div className="flex justify-between items-center">
              <span className="text-gray-300">TTFB</span>
              <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
                {formatValue(metrics.ttfb)}
              </span>
            </div>
          )}
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="mt-3 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;