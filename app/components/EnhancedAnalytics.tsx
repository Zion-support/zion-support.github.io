'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  trackConversion: (conversionName: string, value?: number) => void;
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
  children: React.ReactNode;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = 'G-XXXXXXXXXX',
  facebookPixelId
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && googleAnalyticsId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      (window as any).gtag = gtag;
    }

    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && facebookPixelId) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      (window as any).fbq('init', facebookPixelId);
      (window as any).fbq('track', 'PageView');
    }
  }, [googleAnalyticsId, facebookPixelId]);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, parameters);
      }

      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', eventName, parameters);
      }

      // Custom analytics
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath?: string) => {
    if (typeof window !== 'undefined') {
      const path = pagePath || window.location.pathname;
      
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', googleAnalyticsId, {
          page_title: pageName,
          page_location: window.location.origin + path,
        });
      }

      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }

      console.log('Page View:', pageName, path);
    }
  };

  const trackConversion = (conversionName: string, value?: number) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: googleAnalyticsId,
          event_category: 'conversion',
          event_label: conversionName,
          value: value || 0,
        });
      }

      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          value: value || 0,
          currency: 'USD',
        });
      }

      console.log('Conversion:', conversionName, value);
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;