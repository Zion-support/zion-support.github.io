import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
          getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
          getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
          getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
          getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));
        });
      }

      // Send metrics to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        Object.entries(metrics).forEach(([key, value]) => {
          if (value !== undefined) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: key.toUpperCase(),
              value: Math.round(value),
            });
          }
        });
      }
    };

    // Measure after page load
    const timer = setTimeout(measurePerformance, 2000);
    return () => clearTimeout(timer);
  }, [metrics]);

  // Performance warning system
  useEffect(() => {
    const checkPerformance = () => {
      const issues: string[] = [];
      
      if (metrics.lcp && metrics.lcp > 2500) {
        issues.push('LCP is slow');
      }
      if (metrics.fid && metrics.fid > 100) {
        issues.push('FID is slow');
      }
      if (metrics.cls && metrics.cls > 0.1) {
        issues.push('CLS is high');
      }
      if (metrics.fcp && metrics.fcp > 1800) {
        issues.push('FCP is slow');
      }
      if (metrics.ttfb && metrics.ttfb > 600) {
        issues.push('TTFB is slow');
      }

      if (issues.length > 0) {
        console.warn('Performance issues detected:', issues);
        // In a real app, you might send this to your monitoring service
      }
    };

    if (Object.keys(metrics).length > 0) {
      checkPerformance();
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;