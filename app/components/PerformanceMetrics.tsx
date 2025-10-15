import React, { useEffect, useState } from 'react';
import { logInfo, logWarn } from '../utils/logger';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
}

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug mode is enabled
    const isDebugMode = process.env.NODE_ENV === 'development' || 
                       localStorage.getItem('debug-performance') === 'true';
    
    if (!isDebugMode) return;

    setIsVisible(true);

    // Load web-vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onFID, onTTFB }) => {
      onCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
        logInfo(`CLS: ${metric.value}`, 'Performance');
      });

      onFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
        logInfo(`FCP: ${metric.value}ms`, 'Performance');
      });

      onLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
        logInfo(`LCP: ${metric.value}ms`, 'Performance');
      });

      onFID((metric) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
        logInfo(`FID: ${metric.value}ms`, 'Performance');
      });

      onTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
        logInfo(`TTFB: ${metric.value}ms`, 'Performance');
      });
    }).catch(() => {
      logWarn('Failed to load web-vitals', 'Performance');
    });

    // Get navigation timing
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        }));
      }
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) { // Log slow resources
            logWarn(`Slow resource: ${resource.name} (${resource.duration}ms)`, 'Performance');
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance metrics"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 1000, poor: 3000 })}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Press F12 → Console for detailed logs
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;