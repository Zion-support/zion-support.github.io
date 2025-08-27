import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[0];
          if (fidEntry) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }

    // Navigation Timing API
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigation.responseStart - navigation.requestStart,
        domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        windowLoad: navigation.loadEventEnd - navigation.navigationStart
      }));
    }

    // Window load event
    const handleLoad = () => {
      setMetrics(prev => ({
        ...prev,
        windowLoad: performance.now()
      }));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setMetrics(prev => ({
          ...prev,
          domLoad: performance.now()
        }));
      });
    } else {
      setMetrics(prev => ({
        ...prev,
        domLoad: performance.now()
      }));
    }

    window.addEventListener('load', handleLoad);

    // Report metrics to analytics if enabled
    if (enableReporting) {
      const reportMetrics = () => {
        const currentMetrics = {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
          domLoad: metrics.domLoad,
          windowLoad: metrics.windowLoad
        };

        // Send to analytics service (replace with your analytics endpoint)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'performance_metrics', {
            event_category: 'performance',
            event_label: 'core_web_vitals',
            value: Math.round(currentMetrics.lcp),
            custom_map: {
              fcp: currentMetrics.fcp,
              lcp: currentMetrics.lcp,
              fid: currentMetrics.fid,
              cls: currentMetrics.cls,
              ttfb: currentMetrics.ttfb,
              dom_load: currentMetrics.domLoad,
              window_load: currentMetrics.windowLoad
            }
          });
        }

        // Send to custom analytics endpoint
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: window.location.href,
            timestamp: new Date().toISOString(),
            metrics: currentMetrics,
            userAgent: navigator.userAgent,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            }
          })
        }).catch(console.warn);

        onMetricsUpdate?.(currentMetrics);
      };

      // Report metrics after a delay to ensure all values are captured
      const reportTimer = setTimeout(reportMetrics, 5000);
      return () => clearTimeout(reportTimer);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [enableReporting, onMetricsUpdate]);

  // Performance score calculation
  const getPerformanceScore = (): number => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;

    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;

    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  // Show performance monitor in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Performance Score:</span>
            <span className={scoreColor}>{performanceScore}/100</span>
          </div>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp <= 1000 ? 'text-green-400' : metrics.fcp <= 1800 ? 'text-yellow-400' : 'text-red-400'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp <= 2500 ? 'text-green-400' : metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid <= 100 ? 'text-green-400' : metrics.fid <= 300 ? 'text-yellow-400' : 'text-red-400'}>
                {Math.round(metrics.fid)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls <= 0.1 ? 'text-green-400' : metrics.cls <= 0.25 ? 'text-yellow-400' : 'text-red-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span>{Math.round(metrics.ttfb)}ms</span>
            </div>
          </div>
          
          <div className="pt-2 border-t border-cyan-500/20">
            <button
              onClick={() => {
                // Reload page to measure fresh performance
                window.location.reload();
              }}
              className="w-full px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs hover:bg-cyan-500/30 transition-colors"
            >
              Reload & Measure
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
