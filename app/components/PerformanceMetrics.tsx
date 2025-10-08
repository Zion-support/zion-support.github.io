import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  fmp: number | null;
  si: number | null;
}

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    fmp: null,
    si: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-metrics') === 'true';

    if (!shouldShow) return;

    setIsVisible(true);

    const performanceMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      fmp: null,
      si: null
    };

    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        performanceMetrics.lcp = lastEntry.startTime;
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          performanceMetrics.fid = fid;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            performanceMetrics.cls = clsValue;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }

      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            performanceMetrics.fcp = entry.startTime;
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      
      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observer not supported');
      }

      // FMP - First Meaningful Paint
      const fmpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.name === 'first-meaningful-paint') {
            performanceMetrics.fmp = entry.startTime;
            setMetrics(prev => ({ ...prev, fmp: entry.startTime }));
          }
        });
      });
      
      try {
        fmpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FMP observer not supported');
      }

      // SI - Speed Index
      const siObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (entry.name === 'speed-index') {
            performanceMetrics.si = entry.startTime;
            setMetrics(prev => ({ ...prev, si: entry.startTime }));
          }
        });
      });
      
      try {
        siObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('SI observer not supported');
      }
    }

    // TTFB - Time to First Byte
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      const ttfb = timing.responseStart - timing.navigationStart;
      performanceMetrics.ttfb = ttfb;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Log metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        console.log('Performance Metrics:', performanceMetrics);
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          Object.entries(performanceMetrics).forEach(([key, value]) => {
            if (value !== null) {
              (window as any).gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: key.toUpperCase(),
                value: Math.round(value)
              });
            }
          });
        }
      }, 2000);
    });

  }, []);

  const getScore = (value: number | null, thresholds: { good: number; needsImprovement: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (value === null) return 'good';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">LCP:</span>
          <span className={getScoreColor(getScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }))}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">FID:</span>
          <span className={getScoreColor(getScore(metrics.fid, { good: 100, needsImprovement: 300 }))}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">CLS:</span>
          <span className={getScoreColor(getScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }))}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">FCP:</span>
          <span className={getScoreColor(getScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }))}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">TTFB:</span>
          <span className={getScoreColor(getScore(metrics.ttfb, { good: 600, needsImprovement: 1500 }))}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => {
            localStorage.removeItem('show-performance-metrics');
            setIsVisible(false);
          }}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
};

export default PerformanceMetrics;