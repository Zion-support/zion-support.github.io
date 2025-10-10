'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (url: string, title?: string) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

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
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      script.onload = () => {
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
      };
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

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', event, {
          event_category: properties?.category || 'General',
          event_label: properties?.label,
          value: properties?.value,
          ...properties
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: event,
          ...properties
        });
      }

      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event, properties);
      }
    }
  };

  const page = (url: string, title?: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', googleAnalyticsId, {
          page_title: title || document.title,
          page_location: url
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'page_view',
          page_title: title || document.title,
          page_location: url
        });
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', googleAnalyticsId, {
          user_id: userId,
          custom_map: traits
        });
      }

      // Google Tag Manager
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'user_identify',
          user_id: userId,
          ...traits
        });
      }
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;