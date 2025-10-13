import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    const trackMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value
      }));

      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(trackMetric);
    onINP(trackMetric);
    onFCP(trackMetric);
    onLCP(trackMetric);
    onTTFB(trackMetric);

    // Track additional performance metrics
    const trackAdditionalMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const additionalMetrics = {
            'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            'Load Complete': navigation.loadEventEnd - navigation.loadEventStart,
            'First Byte': navigation.responseStart - navigation.requestStart,
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
          };

          Object.entries(additionalMetrics).forEach(([name, value]) => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: name,
                value: Math.round(value),
                non_interaction: true,
              });
            }
          });
        }
      }
    };

    // Track additional metrics after page load
    if (document.readyState === 'complete') {
      trackAdditionalMetrics();
    } else {
      window.addEventListener('load', trackAdditionalMetrics);
    }

    return () => {
      window.removeEventListener('load', trackAdditionalMetrics);
    };
  }, []);

  // Performance monitoring in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div className="space-y-1">
          {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
          {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
          {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
          {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
        </div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;