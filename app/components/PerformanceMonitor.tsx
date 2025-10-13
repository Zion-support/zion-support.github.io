import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  showDetails?: boolean;
  children: React.ReactNode;
}

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDetails = false, 
  children 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((name: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetric('cls', metric.value);
    });

    onINP((metric) => {
      updateMetric('inp', metric.value);
    });

    onFCP((metric) => {
      updateMetric('fcp', metric.value);
    });

    onLCP((metric) => {
      updateMetric('lcp', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('ttfb', metric.value);
    });

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            // Track additional navigation metrics
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              domInteractive: navEntry.domInteractive - navEntry.navigationStart
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, [updateMetric]);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!showDetails) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Performance Monitor Overlay */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-sm font-medium"
        >
          Performance {isVisible ? '▼' : '▲'}
        </button>
        
        {isVisible && (
          <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-xl min-w-80">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">Core Web Vitals</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>LCP (Largest Contentful Paint):</span>
                <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                  {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>INP (Interaction to Next Paint):</span>
                <span className={getScoreColor(metrics.inp, { good: 200, needsImprovement: 500 })}>
                  {metrics.inp ? `${Math.round(metrics.inp)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.inp, { good: 200, needsImprovement: 500 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>CLS (Cumulative Layout Shift):</span>
                <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                  {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>FCP (First Contentful Paint):</span>
                <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                  {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
              </div>
              
              <div className="flex justify-between items-center">
                <span>TTFB (Time to First Byte):</span>
                <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
                  {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Measuring...'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })}
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-600">
              <div className="text-xs text-gray-400">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PerformanceMonitor;
