import { useEffect, createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  trackConversion: (conversionName: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initializeGoogleAnalytics = () => {
      const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;

      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false // We'll handle this manually
      });
    };

    // Initialize Facebook Pixel
    const initializeFacebookPixel = () => {
      const FB_PIXEL_ID = process.env.REACT_APP_FB_PIXEL_ID;
      if (!FB_PIXEL_ID) return;

      !(function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      (window as any).fbq('init', FB_PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    };

    // Initialize LinkedIn Insight Tag
    const initializeLinkedInInsight = () => {
      const LINKEDIN_PARTNER_ID = process.env.REACT_APP_LINKEDIN_PARTNER_ID;
      if (!LINKEDIN_PARTNER_ID) return;

      (window as any)._linkedin_partner_id = LINKEDIN_PARTNER_ID;
      (window as any).window._linkedin_data_partner_ids = (window as any).window._linkedin_data_partner_ids || [];
      (window as any).window._linkedin_data_partner_ids.push((window as any)._linkedin_partner_id);

      (function(l: any) {
        if (!l) {
          (window as any).intl = l;
          const s = document.getElementsByTagName('script')[0];
          const b = document.createElement('script');
          b.type = 'text/javascript';
          b.async = true;
          b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
          s.parentNode.insertBefore(b, s);
        }
      })((window as any).intl);
    };

    // Initialize analytics
    initializeGoogleAnalytics();
    initializeFacebookPixel();
    initializeLinkedInInsight();

    // Track initial page view
    trackPageView(document.title, window.location.pathname);

  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, parameters);
    }

    // LinkedIn Insight
    if (typeof window !== 'undefined' && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: eventName });
    }

    // Custom analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        parameters,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      })
    }).catch(err => {
      console.error('Failed to send analytics event:', err);
    });
  };

  const trackPageView = (pageName: string, pagePath: string = window.location.pathname) => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
        send_page_view: true
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    // Custom analytics
    trackEvent('page_view', {
      page_name: pageName,
      page_path: pagePath,
      page_title: document.title
    });
  };

  const trackConversion = (conversionName: string, value: number = 0) => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: conversionName,
        value: value,
        currency: 'USD'
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        value: value,
        currency: 'USD'
      });
    }

    // Custom analytics
    trackEvent('conversion', {
      conversion_name: conversionName,
      conversion_value: value,
      currency: 'USD'
    });
  };

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};