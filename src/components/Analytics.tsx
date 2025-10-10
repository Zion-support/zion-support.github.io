import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageView {
  page: string;
  title: string;
  url: string;
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  };

  const trackPageView = (pageView: PageView) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageView.title,
        page_location: pageView.url,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageView);
    }
  };

  return { trackEvent, trackPageView };
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track initial page view
    trackPageView({
      page: window.location.pathname,
      title: document.title,
      url: window.location.href,
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

// Helper function to track page views
export const trackPageView = (pageView: PageView) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageView.title,
      page_location: pageView.url,
    });
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Page View:', pageView);
  }
};

// Helper function to track events
export const trackEvent = (event: AnalyticsEvent) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event);
  }
};

// Predefined event tracking functions
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent({
    action: 'click',
    category: 'button',
    label: `${buttonName} - ${location}`,
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'form',
    label: formName,
  });
};

export const trackServiceInterest = (serviceName: string, source: string) => {
  trackEvent({
    action: 'service_interest',
    category: 'engagement',
    label: `${serviceName} - ${source}`,
  });
};

export const trackROICalculation = (roiValue: number, industry: string) => {
  trackEvent({
    action: 'roi_calculation',
    category: 'engagement',
    label: industry,
    value: roiValue,
  });
};

export const trackContactAttempt = (method: string) => {
  trackEvent({
    action: 'contact_attempt',
    category: 'engagement',
    label: method,
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};

export const trackTimeOnPage = (timeInSeconds: number, page: string) => {
  trackEvent({
    action: 'time_on_page',
    category: 'engagement',
    label: page,
    value: timeInSeconds,
  });
};

export default useAnalytics;