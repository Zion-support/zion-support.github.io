import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
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
  googleTagManagerId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = 'G-XXXXXXXXXX',
  googleTagManagerId = 'GTM-XXXXXXX'
}) => {
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', googleAnalyticsId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: false // We'll handle page views manually
    });

    // Load Google Tag Manager
    const script2 = document.createElement('script');
    script2.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${googleTagManagerId}');
    `;
    document.head.appendChild(script2);

    // GTM NoScript
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

  }, [googleAnalyticsId, googleTagManagerId]);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }
  }, [location, googleAnalyticsId]);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: parameters.category || 'General',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }

    // Also send to dataLayer for GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: pagePath
      });
    }
  };

  const trackConversion = (conversionName: string, value: number = 0) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${googleAnalyticsId}/${conversionName}`,
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

// Hook for tracking specific events
export const useEventTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      category: 'User Interaction',
      label: buttonName,
      location: location
    });
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent('form_submission', {
      category: 'User Interaction',
      label: formName,
      success: success
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      category: 'User Interaction',
      label: fileName,
      file_type: fileType
    });
  };

  const trackVideoPlay = (videoName: string, duration: number) => {
    trackEvent('video_play', {
      category: 'Media',
      label: videoName,
      duration: duration
    });
  };

  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      category: 'User Engagement',
      label: `${depth}%`,
      value: depth
    });
  };

  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent('time_on_page', {
      category: 'User Engagement',
      value: timeInSeconds
    });
  };

  return {
    trackButtonClick,
    trackFormSubmission,
    trackDownload,
    trackVideoPlay,
    trackScrollDepth,
    trackTimeOnPage
  };
};

export default AnalyticsProvider;