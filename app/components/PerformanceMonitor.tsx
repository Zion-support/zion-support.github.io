import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [showPanel, setShowPanel] = useState(false);

  const updateMetrics = useCallback(() => {
    const currentMetrics: PerformanceMetrics = {
      lcp: metrics.lcp,
      fid: metrics.fid,
      cls: metrics.cls,
      fcp: metrics.fcp,
      ttfb: metrics.ttfb,
      memoryUsage: (performance as any).memory ? 
        Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0,
    };

    setMetrics(currentMetrics);

    if (enableConsoleLogging && process.env.NODE_ENV === 'development') {
      console.group('🚀 Performance Metrics');
      console.log('LCP (Largest Contentful Paint):', currentMetrics.lcp ? `${currentMetrics.lcp}ms` : 'Not measured');
      console.log('FID (First Input Delay):', currentMetrics.fid ? `${currentMetrics.fid}ms` : 'Not measured');
      console.log('CLS (Cumulative Layout Shift):', currentMetrics.cls ? currentMetrics.cls.toFixed(4) : 'Not measured');
      console.log('FCP (First Contentful Paint):', currentMetrics.fcp ? `${currentMetrics.fcp}ms` : 'Not measured');
      console.log('TTFB (Time to First Byte):', currentMetrics.ttfb ? `${currentMetrics.ttfb}ms` : 'Not measured');
      console.log('Memory Usage:', `${currentMetrics.memoryUsage}MB`);
      console.groupEnd();
    }
  }, [metrics.lcp, metrics.fid, metrics.cls, metrics.fcp, metrics.ttfb, enableConsoleLogging]);

  const getPerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (currentMetrics.lcp) {
      if (currentMetrics.lcp > 4000) score -= 30;
      else if (currentMetrics.lcp > 2500) score -= 15;
    }
    
    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (currentMetrics.fid) {
      if (currentMetrics.fid > 300) score -= 25;
      else if (currentMetrics.fid > 100) score -= 10;
    }
    
    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (currentMetrics.cls) {
      if (currentMetrics.cls > 0.25) score -= 20;
      else if (currentMetrics.cls > 0.1) score -= 10;
    }
    
    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8-3s, Poor: >3s)
    if (currentMetrics.fcp) {
      if (currentMetrics.fcp > 3000) score -= 15;
      else if (currentMetrics.fcp > 1800) score -= 8;
    }
    
    // TTFB scoring (Good: <600ms, Needs Improvement: 600-1500ms, Poor: >1500ms)
    if (currentMetrics.ttfb) {
      if (currentMetrics.ttfb > 1500) score -= 10;
      else if (currentMetrics.ttfb > 600) score -= 5;
    }
    
    return Math.max(0, score);
  }, []);

  useEffect(() => {
    if (!enableReporting) return;

    const setupPerformanceObservers = () => {
      if ('PerformanceObserver' in window) {
        try {
          // Observe LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Observe FID
          const fidObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: PerformanceEntry & { processingStart: number; startTime: number }) => {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Observe FCP
          const fcpObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: PerformanceEntry) => {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // Observe TTFB
          const ttfbObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: PerformanceEntry) => {
              if (entry.entryType === 'navigation') {
                const navEntry = entry as PerformanceNavigationTiming;
                setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
              }
            });
          });
          ttfbObserver.observe({ entryTypes: ['navigation'] });

          // Observe CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

        } catch (error) {
          console.warn('Performance Observer not supported:', error);
        }
      }
    };

    setupPerformanceObservers();

    // Initial metrics update
    updateMetrics();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, reportInterval);

    return () => {
      clearInterval(interval);
    };
  }, [enableReporting, reportInterval, updateMetrics]);

  // Report metrics to analytics
  useEffect(() => {
    if (!enableReporting) return;

    const reportMetrics = () => {
      const score = getPerformanceScore(metrics);
      
      // Send to analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: 'core_web_vitals',
          value: Math.round(score),
          custom_map: {
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            fcp: metrics.fcp,
            ttfb: metrics.ttfb,
            memory_usage: metrics.memoryUsage,
          }
        });
      }
    };

    // Report after a delay to allow metrics to collect
    const timeout = setTimeout(reportMetrics, 10000);
    return () => clearTimeout(timeout);
  }, [metrics, enableReporting, getPerformanceScore]);

  // Development panel toggle
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
          e.preventDefault();
          setShowPanel(prev => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  if (process.env.NODE_ENV !== 'development' || !showPanel) {
    return null;
  }

  const score = getPerformanceScore(metrics);
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <button
          onClick={() => setShowPanel(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Overall Score:</span>
          <span className={`font-semibold ${getScoreColor(score)}`}>{score}/100</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">LCP:</span>
          <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">FID:</span>
          <span className={metrics.fid && metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">CLS:</span>
          <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
            {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">FCP:</span>
          <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-500' : 'text-green-500'}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Memory:</span>
          <span className={metrics.memoryUsage > 50 ? 'text-red-500' : 'text-green-500'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        Press Ctrl+Shift+P to toggle this panel
      </div>
    </div>
  );
};

export default PerformanceMonitor;