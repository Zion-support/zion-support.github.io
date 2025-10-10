'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
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
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
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
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    initGA();
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
      });
    }
  };

  const trackConversion = (conversionType: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}/${conversionType}`,
        value: value || 0,
        currency: 'USD'
      });
    }
  };

  const value: AnalyticsContextType = {
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

// Analytics tracking hooks
export const usePageTracking = (pageName: string, pagePath: string) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(pageName, pagePath);
  }, [pageName, pagePath, trackPageView]);
};

export const useEventTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      category: 'engagement',
      label: buttonName,
      location: location
    });
  };

  const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      category: 'conversion',
      label: formName,
      success: success
    });
  };

  const trackServiceView = (serviceName: string, category: string) => {
    trackEvent('service_view', {
      category: 'engagement',
      label: serviceName,
      service_category: category
    });
  };

  const trackPhoneClick = (phoneNumber: string, location: string) => {
    trackEvent('phone_click', {
      category: 'conversion',
      label: phoneNumber,
      location: location
    });
  };

  const trackEmailClick = (email: string, location: string) => {
    trackEvent('email_click', {
      category: 'conversion',
      label: email,
      location: location
    });
  };

  return {
    trackButtonClick,
    trackFormSubmit,
    trackServiceView,
    trackPhoneClick,
    trackEmailClick
  };
};