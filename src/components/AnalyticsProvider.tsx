import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
  trackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  trackingId = 'G-XXXXXXXXXX' 
}) => {
  useEffect(() => {
    // Initialize Google Analytics,
if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
'use client';
import React, { useEffect } from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics,
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
    
    const initAnalytics = () => {
      // Load Google Analytics script,
const script = document.createElement('script');
      script.async = true;
      script.src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`};
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: unknown[]) {
        (window as any).dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href});
    }
  }, [trackingId]);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }
    
    // Also log in development,
if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: name,
        page_location: window.location.href,
        ...properties});
    }
    
    // Also log in development,
if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', name, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        ...traits});
    }
    
    // Also log in development,
if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits);
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify};

export default function Component() {
  return (
    <AnalyticsContext.Provider value={value}></AnalyticsContext>
      {children}
    </AnalyticsContext.Provider>
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) { // eslint-disable-line @typescript-eslint/no-explicit-any
      (window as any).gtag('event', eventName, properties); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) { // eslint-disable-line @typescript-eslint/no-explicit-any
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', { // eslint-disable-line @typescript-eslint/no-explicit-any,
page_title: pageName,
        ...properties
      });
    }
  };

  useEffect(() => {
    // Initialize analytics,
if (typeof window !== 'undefined') {
      console.log('Analytics initialized');
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
}
export default AnalyticsProvider;
  const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

    // Initialize Google Analytics;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https:// www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag;
      (window as {dataLayer: unknown[]}).dataLayer = (window as {dataLayer: unknown[]}).dataLayer || [];
        (window as {dataLayer: unknown[]}).dataLayer.push(args);
      (window as {gtag: typeof gtag}).gtag = gtag;
      gtag('js', new Date());
        send_page_view: true;
      });
    };
    // Track page views;
        });
    };

    // Handle route changes;
        });
    };
    // Track user interactions;
        const target = e.target as HTMLElement;
          const text = target.textContent?.trim() || '';
          const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'click', {
              event_category: 'engagement',
              event_label: text,
              value: href
            });
      });
      // Track form submissions;
        const form = e.target as HTMLFormElement;
            event_label: form.id || 'contact_form'
          });
      });
      // Track phone number clicks;
        const target = e.target as HTMLElement;
        const href = (target as HTMLAnchorElement).href || target.getAttribute('href') || '';
        if (href && href.startsWith('tel:')) {
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: href
            });
      });
    };
    
    // Handle route changes,
const handleRouteChange = () => {
      trackPageView();
    };
    
    // Initialize analytics,
initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [GA_TRACKING_ID]);
  return <>{children}<  />;
};

// Export useAnalytics hook for other components,
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  };
  
  const trackPerformance = (metricName: string, value: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'performance',
        event_label: metricName,
        value: Math.round(value)
      });
    }
  };
  
  return { trackEvent, trackPerformance };
};

export default AnalyticsProvider;
