import React, { useEffect, ReactNode } from 'react';

interface CoreWebVitalsProps {
  children: ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      if (typeof window !== 'undefined' && 'web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('Core Web Vitals - CLS:', metric);
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000),
                non_interaction: true,
              });
            }
          });
          getFID((metric) => {
            console.log('Core Web Vitals - FID:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
          getFCP((metric) => {
            console.log('Core Web Vitals - FCP:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FCP',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
          getLCP((metric) => {
            console.log('Core Web Vitals - LCP:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
          getTTFB((metric) => {
            console.log('Core Web Vitals - TTFB:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'TTFB',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
        });
      }
    };

    trackCoreWebVitals();
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;