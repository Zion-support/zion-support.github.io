import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (page: string, title?: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
  setUserProperties: (properties: Record<string, any>) => void;
  setUserId: (userId: string) => void;
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
  facebookPixelId?: string;
  enableDebug?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId = process.env.VITE_GA_MEASUREMENT_ID,
  googleTagManagerId = process.env.VITE_GTM_ID,
  facebookPixelId = process.env.VITE_FB_PIXEL_ID,
  enableDebug = process.env.NODE_ENV === 'development'
  googleAnalyticsId = 'G-XXXXXXXXXX',
  googleTagManagerId = 'GTM-XXXXXXX'
}) => {
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    if (!googleAnalyticsId || typeof window === 'undefined') return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', googleAnalyticsId, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: false // We'll handle this manually
    });

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${googleAnalyticsId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [googleAnalyticsId]);

  // Initialize Google Tag Manager
  useEffect(() => {
    if (!googleTagManagerId || typeof window === 'undefined') return;

    // GTM script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
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
    document.head.appendChild(gtmScript);

    // GTM noscript
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      const existingScript = document.querySelector(`script[src*="${googleTagManagerId}"]`);
      const existingNoscript = document.querySelector(`iframe[src*="${googleTagManagerId}"]`);
      if (existingScript) existingScript.remove();
      if (existingNoscript) existingNoscript.remove();
    };
  }, [googleTagManagerId]);

  // Initialize Facebook Pixel
  useEffect(() => {
    if (!facebookPixelId || typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${facebookPixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="fbevents.js"]`);
      if (existingScript) existingScript.remove();
    };
  }, [facebookPixelId]);

  // Track page views
  const trackPageView = useCallback((page: string, title?: string) => {
    const pageTitle = title || document.title;
    const pageLocation = window.location.href;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: page
      });
    }

    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: page
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    if (enableDebug) {
      console.log('Analytics Page View:', { page, title: pageTitle, location: pageLocation });
    }
  }, [enableDebug]);

  // Track custom events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    const { action, category, label, value, custom_parameters } = event;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...custom_parameters
      });
    }

    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'custom_event',
        event_category: category,
        event_action: action,
        event_label: label,
        value: value,
        ...custom_parameters
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', action, {
        content_category: category,
        content_name: label,
        value: value,
        ...custom_parameters
      });
    }

    if (enableDebug) {
      console.log('Analytics Event:', event);
    }
  }, [enableDebug]);

  // Track conversions
  const trackConversion = useCallback((conversionId: string, value?: number) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
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

    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        conversion_id: conversionId,
        value: value,
        currency: 'USD'
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: value,
        currency: 'USD'
      });
    }

    if (enableDebug) {
      console.log('Analytics Conversion:', { conversionId, value });
    }
  }, [enableDebug]);

  // Set user properties
  const setUserProperties = useCallback((properties: Record<string, any>) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', googleAnalyticsId, {
        custom_map: properties
      });
    }

    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'user_properties',
        ...properties
      });
    }

    if (enableDebug) {
      console.log('Analytics User Properties:', properties);
    }
  }, [googleAnalyticsId, enableDebug]);

  // Set user ID
  const setUserId = useCallback((userId: string) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', googleAnalyticsId, {
        user_id: userId
      });
    }

    // Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'user_id_set',
        user_id: userId
      });
    }

    if (enableDebug) {
      console.log('Analytics User ID:', userId);
    }
  }, [googleAnalyticsId, enableDebug]);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  // Track common user interactions
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');

      if (link) {
        trackEvent({
          action: 'click',
          category: 'link',
          label: link.textContent?.trim() || link.href,
          custom_parameters: {
            link_url: link.href,
            link_text: link.textContent?.trim()
          }
        });
      }

      if (button) {
        trackEvent({
          action: 'click',
          category: 'button',
          label: button.textContent?.trim() || button.getAttribute('aria-label'),
          custom_parameters: {
            button_text: button.textContent?.trim(),
            button_type: button.type
          }
        });
      }
    };

    const handleFormSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      trackEvent({
        action: 'submit',
        category: 'form',
        label: form.id || form.className,
        custom_parameters: {
          form_id: form.id,
          form_class: form.className
        }
      });
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleFormSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, [trackEvent]);
  };

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
    setUserProperties,
    setUserId
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
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

// Declare global types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Google Analytics initialization would go here
      console.log('Analytics initialized');
    };

    initAnalytics();
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties);
    // Send to analytics service
  };

  const trackPageView = (pageName: string) => {
    console.log('Page view tracked:', pageName);
    // Send to analytics service
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export default AnalyticsProvider;
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
