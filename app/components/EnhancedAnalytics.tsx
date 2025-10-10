'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import React, { createContext, useContext, useEffect, useCallback } from 'react';
cursor/analyze-improve-and-deploy-application-6516
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
import React, { createContext, useContext, useEffect, useState } from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
  if (!context) {
cursor/analyze-improve-and-deploy-application-6516
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
export default AnalyticsProvider;
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);
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
      setIsInitialized(true);
    }
  }, []);
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        ...parameters
      });
    }
  };
  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
      });
    }
  };
  const trackConversion = (conversionType: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: process.env.REACT_APP_GA_CONVERSION_ID || 'AW-XXXXXXXXXX/XXXXXXXXXX',
        value: value,
        currency: 'USD',
        conversion_type: conversionType
      });
    }
  };
  const value: AnalyticsContextType = {
interface AnalyticsProviderProps {
  children: React.ReactNode;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID,
  googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);
      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [googleAnalyticsId]);
  // Initialize Google Tag Manager
  useEffect(() => {
    if (googleTagManagerId && typeof window !== 'undefined') {
      // GTM script
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${googleTagManagerId}');
      `;
      document.head.appendChild(gtmScript);
      // GTM noscript
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [googleTagManagerId]);
  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, {
        event_category: parameters.category || 'General',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }
    // Also send to dataLayer for GTM
    if (typeof window !== 'undefined' && 'dataLayer' in window) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters
      });
    }
  }, []);
  const trackPageView = useCallback((pageName: string, pagePath: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', googleAnalyticsId, {
        page_title: pageName,
        page_location: window.location.origin + pagePath
      });
    }
    // Track page view event
    trackEvent('page_view', {
      page_title: pageName,
      page_path: pagePath,
      page_location: window.location.href
    });
  }, [googleAnalyticsId, trackEvent]);
  const trackConversion = useCallback((conversionId: string, value: number = 0) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: 'USD'
      });
    }
    trackEvent('conversion', {
      conversion_id: conversionId,
      value: value,
      currency: 'USD'
    });
  }, [trackEvent]);
  const contextValue: AnalyticsContextType = {
cursor/analyze-improve-and-deploy-application-6516
    trackEvent,
    trackPageView,
    trackConversion
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
cursor/enhance-and-expand-ziontechgroup-com-services-and-site-9619
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};
cursor/analyze-improve-and-deploy-application-6516
