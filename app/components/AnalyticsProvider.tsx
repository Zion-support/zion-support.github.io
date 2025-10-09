import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
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
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const text = target.textContent?.trim() || '';
          const href = (target as HTMLAnchorElement).href || '';
          
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: text || href,
              value: 1
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: form.id || form.className || 'form',
            value: 1
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.href && target.href.startsWith('tel:')) {
          if (window.gtag) {
            window.gtag('event', 'phone_click', {
              event_category: 'contact',
              event_label: target.href,
              value: 1
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.href && target.href.startsWith('mailto:')) {
          if (window.gtag) {
            window.gtag('event', 'email_click', {
              event_category: 'contact',
              event_label: target.href,
              value: 1
            });
          }
        }
      });
    };

    // Track performance metrics
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            
            if (navigation && window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(navigation.loadEventEnd - navigation.fetchStart)
              });

              window.gtag('event', 'timing_complete', {
                name: 'dom_ready',
                value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart)
              });
            }
          }, 0);
        });
      }
    };

    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();
    trackPerformance();

    // Track route changes (for SPA)
    const handleRouteChange = () => {
      trackPageView();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;