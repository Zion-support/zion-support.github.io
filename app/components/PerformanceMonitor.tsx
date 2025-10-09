'use client';
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  enableReporting = true 
}) => {
  useEffect(() => {
    if (!enableReporting || typeof window === 'undefined') return;

    // Core Web Vitals monitoring
    const reportMetric = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', metric);
      }

      // Send to Google Analytics
      if ('gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            delta: metric.delta,
            id: metric.id,
            navigationType: metric.navigationType,
            timestamp: Date.now(),
          }),
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        });
      }
    };

    // Measure Core Web Vitals
    getCLS(reportMetric);
    getFID(reportMetric);
    getFCP(reportMetric);
    getLCP(reportMetric);
    getTTFB(reportMetric);

    // Monitor page load performance
    const measurePageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            'Page Load Time': navigation.loadEventEnd - navigation.loadEventStart,
            'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            'First Byte': navigation.responseStart - navigation.requestStart,
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
            'SSL Negotiation': navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
          };

          Object.entries(metrics).forEach(([name, value]) => {
            if (value > 0) {
              reportMetric({
                name: name.replace(/\s+/g, '_').toUpperCase(),
                value,
                delta: value,
                id: `page_load_${name.toLowerCase().replace(/\s+/g, '_')}`,
                navigationType: 'navigate',
              });
            }
          });
        }
      }
    };

    // Measure page load after it's complete
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading performance
    const measureResourcePerformance = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        
        resources.forEach((resource: PerformanceResourceTiming) => {
          const loadTime = resource.responseEnd - resource.requestStart;
          
          if (loadTime > 1000) { // Only report slow resources (>1s)
            reportMetric({
              name: 'SLOW_RESOURCE',
              value: loadTime,
              delta: loadTime,
              id: `resource_${resource.name.split('/').pop()}`,
              navigationType: 'navigate',
            });
          }
        });
      }
    };

    // Monitor resources after a delay to ensure they're loaded
    const resourceTimer = setTimeout(measureResourcePerformance, 3000);

    return () => {
      clearTimeout(resourceTimer);
      window.removeEventListener('load', measurePageLoad);
    };
  }, [enableReporting]);

  return null;
};

export default PerformanceMonitor;