'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pagePath: string, pageTitle: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
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
  googleTagManagerId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID,
  googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false // We'll handle this manually
      });
    }

    // Initialize Google Tag Manager
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
      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(gtmNoscript, document.body.firstChild);
    }
  }, [googleAnalyticsId, googleTagManagerId]);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters
      });
    }

    // Track in GTM dataLayer
    if (typeof window !== 'undefined' && 'dataLayer' in window) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters
      });
    }
  };

  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('config', googleAnalyticsId, {
        page_title: pageTitle,
        page_location: pagePath,
        send_page_view: true
      });
    }

    // Track in GTM dataLayer
    if (typeof window !== 'undefined' && 'dataLayer' in window) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_title: pageTitle,
        page_location: pagePath
      });
    }
  };

  const trackConversion = (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: 'USD'
      });
    }
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