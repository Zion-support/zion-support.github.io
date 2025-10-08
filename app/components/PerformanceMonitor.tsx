import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000),
              });
            }
          });

          getFID((metric) => {
            console.log('FID:', metric);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metric.value),
              });
            }
          });

          getFCP((metric) => {
            console.log('FCP:', metric);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FCP',
                value: Math.round(metric.value),
              });
            }
          });

          getLCP((metric) => {
            console.log('LCP:', metric);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metric.value),
              });
            }
          });

          getTTFB((metric) => {
            console.log('TTFB:', metric);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'TTFB',
                value: Math.round(metric.value),
              });
            }
          });
        });
      }
    };

    // Monitor resource loading
    const monitorResourceLoading = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const resources = performance.getEntriesByType('resource');
          const slowResources = resources.filter(
            (resource) => resource.duration > 1000
          );

          if (slowResources.length > 0 && window.gtag) {
            window.gtag('event', 'slow_resources', {
              event_category: 'Performance',
              event_label: 'Slow Resources',
              value: slowResources.length,
            });
          }
        });
      }
    };

    // Monitor memory usage
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (memory && window.gtag) {
          window.gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'Memory Usage',
            value: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
          });
        }
      }
    };

    // Monitor connection speed
    const monitorConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && window.gtag) {
          window.gtag('event', 'connection_speed', {
            event_category: 'Performance',
            event_label: 'Connection Speed',
            value: connection.effectiveType === '4g' ? 4 : connection.effectiveType === '3g' ? 3 : 2,
          });
        }
      }
    };

    monitorWebVitals();
    monitorResourceLoading();
    monitorMemoryUsage();
    monitorConnectionSpeed();
  }, []);

  return null;
};

export default PerformanceMonitor;