import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tti: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    tti: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    setIsVisible(true);

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              fcp: entry.startTime
            }));
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({
          ...prev,
          lcp: lastEntry.startTime
        }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({
            ...prev,
            fid
          }));
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({
          ...prev,
          cls: clsValue
        }));
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({
          ...prev,
          ttfb
        }));
      }
    };

    // Measure Time to Interactive (TTI)
    const measureTTI = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const tti = navigation.domInteractive - navigation.navigationStart;
        setMetrics(prev => ({
          ...prev,
          tti
        }));
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();
    measureTTI();

    // Send metrics to analytics
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            fcp: Math.round(metrics.fcp),
            lcp: Math.round(metrics.lcp),
            fid: Math.round(metrics.fid),
            cls: Math.round(metrics.cls * 1000) / 1000,
            ttfb: Math.round(metrics.ttfb),
            tti: Math.round(metrics.tti),
          }
        });
      }
    };

    // Send metrics after 5 seconds
    const timer = setTimeout(sendMetrics, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [metrics]);

  if (!isVisible) return null;

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreText = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-sm">
      <div className="font-bold mb-2 text-yellow-400">Performance Monitor</div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
            {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, needsImprovement: 3000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
            {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, needsImprovement: 4000 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
            {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, needsImprovement: 300 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
            {(metrics.cls * 1000 / 1000).toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
            {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, needsImprovement: 1800 })})
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={getScoreColor(metrics.tti, { good: 3800, needsImprovement: 7300 })}>
            {Math.round(metrics.tti)}ms ({getScoreText(metrics.tti, { good: 3800, needsImprovement: 7300 })})
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-400">
        Core Web Vitals monitoring
      </div>
    </div>
  );
};

export default PerformanceMonitor;