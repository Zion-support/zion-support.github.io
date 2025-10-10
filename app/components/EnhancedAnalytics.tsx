'use client';
import React, { createContext, useContext, useEffect, memo } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
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
  enableDebug?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = memo(({
  children,
  googleAnalyticsId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  enableDebug = process.env.NODE_ENV === 'development'
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && googleAnalyticsId) {
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
        send_page_view: true
      });

      if (enableDebug) {
        console.log('Google Analytics initialized with ID:', googleAnalyticsId);
      }
    }
  }, [googleAnalyticsId, enableDebug]);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });

      if (enableDebug) {
        console.log('Analytics Event:', eventName, parameters);
      }
    }
  };

  const trackPageView = (pageName: string, pagePath?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', googleAnalyticsId, {
        page_title: pageName,
        page_location: pagePath || window.location.href,
        send_page_view: true
      });

      if (enableDebug) {
        console.log('Page View:', pageName, pagePath);
      }
    }
  };

  const trackConversion = (conversionType: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${googleAnalyticsId}/${conversionType}`,
        value: value || 0,
        currency: 'USD'
      });

      if (enableDebug) {
        console.log('Conversion:', conversionType, value);
      }
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
});

AnalyticsProvider.displayName = 'AnalyticsProvider';

// Hook for tracking specific events
export const useEventTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      category: 'engagement',
      label: buttonName,
      location: location || 'unknown'
    });
  };

  const trackFormSubmit = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      category: 'engagement',
      label: formName,
      success: success
    });
  };

  const trackLinkClick = (linkText: string, destination: string) => {
    trackEvent('link_click', {
      category: 'engagement',
      label: linkText,
      destination: destination
    });
  };

  const trackPhoneClick = (phoneNumber: string, location?: string) => {
    trackEvent('phone_click', {
      category: 'contact',
      label: phoneNumber,
      location: location || 'unknown'
    });
  };

  const trackEmailClick = (emailAddress: string, location?: string) => {
    trackEvent('email_click', {
      category: 'contact',
      label: emailAddress,
      location: location || 'unknown'
    });
  };

  const trackServiceView = (serviceName: string, category: string) => {
    trackEvent('service_view', {
      category: 'service',
      label: serviceName,
      service_category: category
    });
  };

  const trackPricingView = (planName: string) => {
    trackEvent('pricing_view', {
      category: 'pricing',
      label: planName
    });
  };

  const trackDemoRequest = (demoType: string) => {
    trackEvent('demo_request', {
      category: 'conversion',
      label: demoType
    });
  };

  const trackConsultationRequest = () => {
    trackEvent('consultation_request', {
      category: 'conversion',
      label: 'free_consultation'
    });
  };

  return {
    trackButtonClick,
    trackFormSubmit,
    trackLinkClick,
    trackPhoneClick,
    trackEmailClick,
    trackServiceView,
    trackPricingView,
    trackDemoRequest,
    trackConsultationRequest
  };
};

// Component for automatic page view tracking
export const PageViewTracker: React.FC<{ pageName: string; pagePath?: string }> = memo(({ 
  pageName, 
  pagePath 
}) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(pageName, pagePath);
  }, [pageName, pagePath, trackPageView]);

  return null;
});

PageViewTracker.displayName = 'PageViewTracker';

// Higher-order component for tracking component interactions
export const withAnalytics = <P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) => {
  return memo((props: P) => {
    const { trackEvent } = useAnalytics();

    useEffect(() => {
      trackEvent('component_view', {
        category: 'component',
        label: componentName
      });
    }, [trackEvent]);

    return <Component {...props} />;
  });
};

export default AnalyticsProvider;