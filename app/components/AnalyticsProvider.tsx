import React, { useEffect } from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Google Analytics 4
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Initialize custom analytics
    const initCustomAnalytics = () => {
      if (typeof window !== 'undefined') {
        // Track page views
        const trackPageView = () => {
          if (window.gtag) {
            window.gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
            });
          }
        };

        // Track performance metrics
        const trackPerformance = () => {
          if ('performance' in window) {
            window.addEventListener('load', () => {
              setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                if (perfData && window.gtag) {
                  window.gtag('event', 'timing_complete', {
                    name: 'load',
                    value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                  });
                }
              }, 0);
            });
          }
        };

        // Track user interactions
        const trackInteractions = () => {
          // Track clicks on important elements
          document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            const button = target.closest('button');
            
            if (link && window.gtag) {
              window.gtag('event', 'click', {
                event_category: 'link',
                event_label: link.href,
                value: 1,
              });
            }
            
            if (button && window.gtag) {
              window.gtag('event', 'click', {
                event_category: 'button',
                event_label: button.textContent || 'button',
                value: 1,
              });
            }
          });
        };

        trackPageView();
        trackPerformance();
        trackInteractions();
      }
    };

    initGoogleAnalytics();
    initCustomAnalytics();
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;