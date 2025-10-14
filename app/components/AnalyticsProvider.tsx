interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}
;
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

    // Analytics tracking implementation;
    console.log('Analytics Event:', event, properties)"'"
    // In a real implementation, you would send this to your analytics service;
    if (typeof window !== 'undefined' && (window as any).gtag) {'''
      (window as any).gtag('event', event, properties)"}"'"'"
  }
  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics Identify:', userId, traits)"'"
    if (typeof window !== 'undefined' && (window as any).gtag) {'''
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {'''
        user_id: userId,
        custom_map: traits;
      }
  const page = (name: string, properties?: Record<string, any>) => {console.log('Analytics Page:', name, properties)"'"
    if (typeof window !== 'undefined' && (window as any).gtag) {'''
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {'''
        page_title: name,
import React, { useEffect } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
    
    const initAnalytics = () => {
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      }
      (window as { gtag: typeof gtag }).gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
 (Fix all linting errors and merge conflicts)
        page_location: window.location.href,
        ...properties;
    page;
  };

  return (
  <>
    <AnalyticsContext.Provider value={value}></AnalyticsContext>
      { children }
    </AnalyticsContext.Provider>
  const context = useContext(AnalyticsContext
  </>);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');'
  }
  return context;
ursor/fix-errors-and-merge-to-main-54ad;
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as { gtag?: typeof gtag }).gtag) {
        (window as { gtag: typeof gtag }).gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          const text = target.textContent?.trim() || '';
          const href = target.getAttribute('href') || '';
          
          if ((window as { gtag?: typeof gtag }).gtag) {
            (window as { gtag: typeof gtag }).gtag('event', 'click', {
              event_category: 'engagement',
              event_label: text,
              value: href
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        if ((window as { gtag?: typeof gtag }).gtag) {
          (window as { gtag: typeof gtag }).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: form.id || 'contact_form'
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLAnchorElement;
        if (target.href && target.href.startsWith('tel:')) {
          if ((window as { gtag?: typeof gtag }).gtag) {
            (window as { gtag: typeof gtag }).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: target.href
            });
          }
        }
      });
    };

    // Handle route changes
    const handleRouteChange = () => {
      trackPageView();
    };

    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
 (Fix all linting errors and merge conflicts)

}
}
}
}
}