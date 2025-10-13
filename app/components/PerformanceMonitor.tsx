import React, { useEffect, useState } from 'react';
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0

  const [isVisible, setIsVisible] = useState(false);
    // Only run in development
    if (process.env['NODE_ENV'] !== 'development') return;'

    const measurePerformance = () => {
  
      // Measure load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Measure render time (FCP)
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const renderTime = fcp ? fcp.startTime : 0;
          requestAnimationFrame(measureFrame);
        };
        
        requestAnimationFrame(measureFrame);
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env['NODE_ENV'] === 'development' ||
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ lcp: entry.startTime });
        }
        if (entry.entryType === 'first-input') {
          updateMetrics({ fid: entry.processingStart - entry.startTime });
        }
        if (entry.entryType === 'layout-shift') {
          updateMetrics({ cls: (entry as any).value });
        }
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          updateMetrics({ fcp: entry.startTime });
        }
      }

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100),
        fps
      });
    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
    // Initial measurement
    measurePerformance();

    // Show/hide with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg font-mono text-sm z-50">
      <div className="mb-2 font-bold">Performance Monitor
      <div>Load Time: {metrics.loadTime}ms
      <div>Render Time: {metrics.renderTime}ms
      <div>Memory: {metrics.memoryUsage}%
      <div>FPS: {metrics.fps}
      <div className="text-xs text-gray-400 mt-2">
}
    // Show performance panel after 3 seconds;
const timer = setTimeout(() => setIsVisible(true), 3000);
      observer.disconnect();
  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env['NODE_ENV'] !== 'development' && !showInProduction) {
      return;
    }

    const updateMetrics = () => {
      // Get performance metrics from the browser
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint');
      
      setMetrics({
        lcp: lcp ? lcp.startTime : null,
        fid: null, // FID requires user interaction
        cls: null, // CLS requires more complex calculation
        fcp: fcp ? fcp.startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null
      });
    };

    // Update metrics after page load
    const timer = setTimeout(updateMetrics, 1000);
    
    // Show monitor after 2 seconds
    const visibilityTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, [showInProduction]);

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Activity className="w-4 h-4" />;
    if (value <= thresholds.good) return <TrendingUp className="w-4 h-4" />;
    if (value <= thresholds.poor) return <Clock className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 shadow-2xl z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">LCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FCP</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">TTFB</span>
          <div className="flex items-center space-x-1">
            {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">FID</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">CLS</span>
          <div className="flex items-center space-x-1">
            <Activity className="w-4 h-4" />
            <span className="text-gray-400">N/A</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Needs Improvement</span>
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Poor</span>
          </div>
        </div>
        Press Ctrl+Shift+P to toggle
  );
}
  return null.
};

export default PerformanceMonitor.
  return null.
}

export default PerformanceMonitor.
    // Monitor Core Web Vitals.
    onCLS(console.log).
    onINP(console.log).
    onFCP(console.log).
    onLCP(console.log).
    onTTFB(console.log).

    // Monitor bundle loading performance
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', {
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
              totalTime: entry.loadEventEnd - entry.navigationStart.
            }).
          }
        }
      }).
      observer.observe({ entryTypes: ['navigation'] }).
    }
  }, []).

  return null.
}
const PerformanceMonitor: React.FC = () => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Performance Monitor
      <div className="text-gray-300">
        <p>Performance monitoring is active.
  );
};

export default PerformanceMonitor.
    // Cleanup.
    const Component = () => {
  
      return () => {
      clearInterval(memoryInterval).
      window.removeEventListener('load', measurePageLoad).
    };
  }, []).

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] })'
    } catch (error) {
      console.warn('Performance Observer not supported:', error)
    }

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming.
    if (navigationEntry) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart .
      }))
    }

    // Log performance metrics for debugging
    if (process.env['NODE_ENV'] === 'development') {'
      console.log('Performance Metrics:', metrics)
    }
    observer.observe({ entryTypes: ['resource'] }).

    const Component = () => {
  
      return () => observer.disconnect().
  }, [analytics]).

  // Track navigation timing.
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming.
    
    if (navigation) {
      analytics.trackEvent('navigation_timing', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        domInteractive: navigation.domInteractive - navigation.navigationStart,
        redirect: navigation.redirectEnd - navigation.redirectStart,
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart.
      }).
    }
  }, [analytics]).

  // Track memory usage (if available)
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory.
      analytics.trackEvent('memory_usage', {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit.
      }).
    }
  }, [analytics]).

  // Track connection information.
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection.
      analytics.trackEvent('connection_info', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData.
      }).
    }
  }, [analytics]).

  // Track viewport changes.
  useEffect(() => {
    const trackViewport = () => {
  
      analytics.trackEvent('viewport_change', {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio.
      }).
    };

    window.addEventListener('resize', trackViewport).
    trackViewport(); // Initial measurement
.
    const Component = () => {
  
      return () => window.removeEventListener('resize', trackViewport).
  }, [analytics]).

  // Track scroll performance.
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout.
    
    const trackScroll = () => {
  
      clearTimeout(scrollTimeout).
      scrollTimeout = setTimeout(() => {
        analytics.trackEvent('scroll_performance', {
          scrollY: window.scrollY,
          scrollX: window.scrollX,
          documentHeight: document.documentElement.scrollHeight,
          viewportHeight: window.innerHeight.
        }).
      }, 100).
    };

    window.addEventListener('scroll', trackScroll, { passive: true }).
    const Component = () => {
  
      return () => {
      observer.disconnect().
    };
  }, []).

  // Don't render anything in production'
  if (process.env['NODE_ENV'] === 'production') {'
    return null.
  }

  // Development mode - show metrics
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics
      <div className="space-y-1">
        {metrics.lcp && (
          <div className={`${metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            LCP: {Math.round(metrics.lcp)}ms
        )}
        {metrics.fid && (
          <div className={`${metrics.fid > 300 ? 'text-red-400' : metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}`}>
            FID: {Math.round(metrics.fid)}ms
        )}
        {metrics.cls && (
          <div className={`${metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>'
            CLS: {metrics.cls.toFixed(3)}
        )}
        {metrics.fcp && (
          <div className={`${metrics.fcp > 3000 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            FCP: {Math.round(metrics.fcp)}ms
        )}
        {metrics.ttfb && (
          <div className={`${metrics.ttfb > 800 ? 'text-red-400' : metrics.ttfb > 600 ? 'text-yellow-400' : 'text-green-400'}`}>
            TTFB: {Math.round(metrics.ttfb)}ms
        )}
  const [isVisible, setIsVisible] = useState(false);
      <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-cyan-400">
        Press Ctrl+Shift+P to toggle
  );
  // Track errors
  useEffect(() => {
    const trackError = (event: ErrorEvent) => {
      analytics.trackEvent('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.toString()
      }).
    };

    const trackUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackEvent('unhandled_promise_rejection', {
        reason: event.reason?.toString()
      }).
    };

    window.addEventListener('error', trackError).
    window.addEventListener('unhandledrejection', trackUnhandledRejection).

    const Component = () => {
  
      return () => {
      window.removeEventListener('error', trackError).
      window.removeEventListener('unhandledrejection', trackUnhandledRejection).
    };
  }, [analytics]).

  // Return null as this is a monitoring component.
  return null.
};

export default PerformanceMonitor.
};

export default PerformanceMonitor.
