import React, { useState, useEffect, useCallback } from 'react';

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

  const [, setPerformanceScore] = useState(0);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure TTFB
    const navObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      });
    });
    navObserver.observe({ entryTypes: ['navigation'] });

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }));
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  // Calculate performance score
  useEffect(() => {
    const calculateScore = () => {
      let score = 100;
      
      if (metrics.lcp && metrics.lcp > 2500) score -= 20;
      if (metrics.fid && metrics.fid > 100) score -= 20;
      if (metrics.cls && metrics.cls > 0.1) score -= 20;
      if (metrics.fcp && metrics.fcp > 1800) score -= 20;
      if (metrics.ttfb && metrics.ttfb > 600) score -= 20;

      setPerformanceScore(Math.max(0, score));
    };

    calculateScore();
  }, [metrics]);

  // Console logging
  useEffect(() => {
    if (enableConsoleLogging) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics, enableConsoleLogging]);

  // Reporting
  useEffect(() => {
    if (!enableReporting) return;

    const interval = setInterval(() => {
      // Send metrics to analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          fcp: metrics.fcp,
          ttfb: metrics.ttfb,
          memory_usage: metrics.memoryUsage,
        });
      }
    }, reportInterval);

    return () => clearInterval(interval);
  }, [enableReporting, reportInterval, metrics]);

  return null;
};

export default PerformanceMonitor;
=======
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const collectMetrics = () => {
      if (typeof window === 'undefined' || !('performance' in window)) {
        return;
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');

      const firstContentfulPaint = paintEntries.find(
        (entry) => entry.name === 'first-contentful-paint'
      )?.startTime || 0;

      const largestContentfulPaint = paintEntries.find(
        (entry) => entry.name === 'largest-contentful-paint'
      )?.startTime || 0;

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need to be measured separately
        cumulativeLayoutShift: 0, // Would need to be measured separately
        totalBlockingTime: 0, // Would need to be measured separately
        speedIndex: 0, // Would need to be measured separately
        timeToInteractive: navigation.domInteractive - navigation.navigationStart,
      };

      setMetrics(performanceMetrics);
    };

    // Collect metrics after page load
    const timer = setTimeout(collectMetrics, 1000);

    // Show/hide with keyboard shortcut
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  const getScore = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-lg rounded-lg p-4 text-white text-xs font-mono max-w-sm z-50 border border-white/20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(getScore(metrics.loadTime, { good: 2000, needsImprovement: 4000 }))}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }))}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }))}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={getScoreColor(getScore(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 }))}>
            {metrics.timeToInteractive.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/20 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> origin/main
