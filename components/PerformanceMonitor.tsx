import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
  thresholds?: {
    loadTime: number;
    renderTime: number;
    memoryUsage: number;
    fcp: number;
    lcp: number;
    cls: number;
    fid: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logMetrics = false,
  onThresholdExceeded,
  thresholds = {
    loadTime: 3000,
    renderTime: 1000,
    memoryUsage: 50 * 1024 * 1024, // 50MB
    fcp: 1800,
    lcp: 2500,
    cls: 0.1,
    fid: 100
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showMetrics);

  const checkThresholds = useCallback((currentMetrics: PerformanceMetrics) => {
    const exceeded = Object.entries(thresholds).some(([key, threshold]) => {
      const value = currentMetrics[key as keyof PerformanceMetrics];
      return value > threshold;
    });

    if (exceeded && onThresholdExceeded) {
      onThresholdExceeded(currentMetrics);
    }
  }, [thresholds, onThresholdExceeded]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    let observer: PerformanceObserver | null = null;
    let webVitalsObserver: PerformanceObserver | null = null;

    const collectMetrics = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      if (navigationEntry) {
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcpEntry = performance.getEntriesByType('largest-contentful-paint').pop();
        
        const currentMetrics: PerformanceMetrics = {
          loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
          renderTime: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
          fcp: fcpEntry ? fcpEntry.startTime : 0,
          lcp: lcpEntry ? lcpEntry.startTime : 0,
          cls: 0, // Will be updated by observer
          fid: 0  // Will be updated by observer
        };

        setMetrics(currentMetrics);
        checkThresholds(currentMetrics);

        if (logMetrics) {
          console.log('Performance Metrics:', currentMetrics);
        }
      }
    };

    // Set up navigation timing observer
    try {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          collectMetrics();
        }
      });
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Set up Web Vitals observer
    try {
      webVitalsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });
      webVitalsObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('Web Vitals Observer not supported:', error);
    }

    // Collect initial metrics
    setTimeout(collectMetrics, 1000);

    return () => {
      observer?.disconnect();
      webVitalsObserver?.disconnect();
    };
  }, [logMetrics, checkThresholds]);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!metrics || !isVisible) return null;

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusColor = (value: number, threshold: number) => {
    return value > threshold ? 'text-red-400' : value > threshold * 0.8 ? 'text-yellow-400' : 'text-green-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-white/10 text-xs font-mono max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-blue-400">Performance</h4>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white text-lg leading-none"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load:</span>
          <span className={getStatusColor(metrics.loadTime, thresholds.loadTime)}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Render:</span>
          <span className={getStatusColor(metrics.renderTime, thresholds.renderTime)}>
            {metrics.renderTime.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={getStatusColor(metrics.memoryUsage, thresholds.memoryUsage)}>
            {formatBytes(metrics.memoryUsage)}
          </span>
        </div>
        {metrics.fcp > 0 && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getStatusColor(metrics.fcp, thresholds.fcp)}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        {metrics.lcp > 0 && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={getStatusColor(metrics.lcp, thresholds.lcp)}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      <div className="mt-2 pt-2 border-t border-white/10 text-xs text-slate-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;