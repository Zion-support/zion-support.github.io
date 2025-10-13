import React, { useEffect, ReactNode } from 'react';

interface WebVitalsTrackerProps {
  children: ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if (typeof window !== 'undefined' && 'web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric);
            // Send to analytics service
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
            console.log('FID:', metric);
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
            console.log('FCP:', metric);
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
            console.log('LCP:', metric);
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
            console.log('TTFB:', metric);
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

    trackWebVitals();
  }, []);

  return <>{children}</>;
};

export default WebVitalsTracker;