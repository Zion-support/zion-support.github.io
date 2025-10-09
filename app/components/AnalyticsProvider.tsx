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

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        }
        (window as { gtag: typeof gtag }).gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Initialize analytics
    initGoogleAnalytics();

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page view on mount
    trackPageView();

    // Track page views on route changes
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