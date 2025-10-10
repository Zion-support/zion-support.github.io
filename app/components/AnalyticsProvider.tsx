'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
  setUserProperties: (properties: Record<string, any>) => void;
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
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics 4
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      window.gtag('js', new Date());
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Initialize other analytics services
    initializeHotjar();
    initializeFacebookPixel();
    
    setIsInitialized(true);
  };

  const initializeHotjar = () => {
    if (typeof window !== 'undefined' && !window.hj) {
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:process.env.NEXT_PUBLIC_HOTJAR_ID || '1234567',hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    }
  };

  const initializeFacebookPixel = () => {
    if (typeof window !== 'undefined' && !window.fbq) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID || '1234567890');
      window.fbq('track', 'PageView');
    }
  };

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (!isInitialized) return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', eventName, parameters);
    }

    // Custom analytics
    console.log('Analytics Event:', eventName, parameters);
  };

  const trackPageView = (pageName: string, pagePath: string = window.location.pathname) => {
    if (!isInitialized) return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    console.log('Page View:', pageName, pagePath);
  };

  const trackConversion = (conversionType: string, value: number = 0) => {
    if (!isInitialized) return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: process.env.NEXT_PUBLIC_GA_CONVERSION_ID || 'AW-XXXXXXXXX/XXXXXXXXX',
        value: value,
        currency: 'USD',
        transaction_id: Date.now().toString()
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: conversionType,
        value: value,
        currency: 'USD'
      });
    }

    console.log('Conversion:', conversionType, value);
  };

  const setUserProperties = (properties: Record<string, any>) => {
    if (!isInitialized) return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        custom_map: properties
      });
    }

    console.log('User Properties:', properties);
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
    setUserProperties
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    hj: (...args: any[]) => void;
    _hjSettings: any;
    fbq: (...args: any[]) => void;
  }
}