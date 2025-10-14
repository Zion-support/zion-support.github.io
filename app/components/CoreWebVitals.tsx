  useEffect(() => {
    const sendToAnalytics = (data: any) => {
      // Send to Google Analytics or other analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', data.name, {
          event_category: 'Web Vitals',
          event_label: data.id,
          value: Math.round(data.name === 'CLS' ? data.value * 1000 : data.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', data.name, data.value);
      }
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []); cursor/analyze-improve-and-deploy-application-c573

  return null;
};

export default CoreWebVitals;
import React, { useEffect, ReactNode } from 'react';

interface CoreWebVitalsProps {
  children: ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('Core Web Vitals - CLS:', metric);
          });
          getFID((metric) => {
            console.log('Core Web Vitals - FID:', metric);
          });
          getFCP((metric) => {
            console.log('Core Web Vitals - FCP:', metric);
          });
          getLCP((metric) => {
            console.log('Core Web Vitals - LCP:', metric);
          });
          getTTFB((metric) => {
            console.log('Core Web Vitals - TTFB:', metric);
          });
        });
      }
    };

    trackCoreWebVitals();
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals</CoreWebVitalsProps>