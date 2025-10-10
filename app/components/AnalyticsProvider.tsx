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

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
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
      });
    }

    // Initialize Google Tag Manager
    if (googleTagManagerId && typeof window !== 'undefined') {
      // Load GTM script
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${googleTagManagerId}');
      `;
      document.head.appendChild(gtmScript);

      // Add GTM noscript
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [googleAnalyticsId, googleTagManagerId]);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ('gtag' in window) {
        const gtag = (window as any).gtag;
        gtag('event', event, {
          event_category: properties?.category || 'General',
          event_label: properties?.label,
          value: properties?.value,
          ...properties
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event,
          properties,
          url: window.location.href,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  };

  const page = (url: string, title?: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ('gtag' in window) {
        const gtag = (window as any).gtag;
        gtag('config', googleAnalyticsId, {
          page_title: title || document.title,
          page_location: url,
        });
      }

      // Custom analytics
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'page',
          url,
          title: title || document.title,
          timestamp: Date.now(),
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ('gtag' in window) {
        const gtag = (window as any).gtag;
        gtag('config', googleAnalyticsId, {
          user_id: userId,
          custom_map: traits,
        });
      }

      // Custom analytics
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'identify',
          userId,
          traits,
          timestamp: Date.now(),
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;