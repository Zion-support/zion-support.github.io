import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        window.gtag('config', process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX', {
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
        if (target.matches('button, a[href], [role="button"]')) {
          const action = target.textContent?.trim() || target.getAttribute('aria-label') || 'click';
          const category = target.closest('section')?.getAttribute('aria-labelledby') || 'interaction';
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            window.gtag('event', 'click', {
              event_category: category,
              event_label: action,
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        const formName = form.getAttribute('name') || form.getAttribute('id') || 'form';
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: formName,
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.matches('a[href^="tel:"]')) {
          if (typeof window !== 'undefined' && 'gtag' in window) {
            window.gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.matches('a[href^="mailto:"]')) {
          if (typeof window !== 'undefined' && 'gtag' in window) {
            window.gtag('event', 'email_click', {
              event_category: 'engagement',
              event_label: 'email_address',
            });
          }
        }
      });
    };

    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();

    // Track route changes (if using React Router)
    const handleRouteChange = () => {
      trackPageView();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;