import { useEffect } from 'react';

// Google Analytics 4 implementation
export const useAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);

      // Initialize gtag
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
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: title || document.title,
        page_location: url,
      });
    }
  };

  return { trackEvent, trackPageView };
};

// Analytics component for tracking page views
export const Analytics: React.FC = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.href, document.title);

    // Track route changes (for SPA behavior)
    const handleRouteChange = () => {
      trackPageView(window.location.href, document.title);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackPageView]);

  return null;
};

// Event tracking hooks
export const useEventTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location || window.location.pathname,
    });
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', {
      service_name: serviceName,
      page_location: window.location.pathname,
    });
  };

  const trackFeatureInteraction = (featureName: string, action: string) => {
    trackEvent('feature_interaction', {
      feature_name: featureName,
      action: action,
      page_location: window.location.pathname,
    });
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent('form_submission', {
      form_name: formName,
      success: success,
      page_location: window.location.pathname,
    });
  };

  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      depth: depth,
      page_location: window.location.pathname,
    });
  };

  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent('time_on_page', {
      time_seconds: timeInSeconds,
      page_location: window.location.pathname,
    });
  };

  return {
    trackButtonClick,
    trackServiceView,
    trackFeatureInteraction,
    trackFormSubmission,
    trackScrollDepth,
    trackTimeOnPage,
  };
};

// Scroll depth tracking hook
export const useScrollTracking = () => {
  const { trackScrollDepth } = useEventTracking();

  useEffect(() => {
    let maxScrollDepth = 0;
    const thresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
      }

      // Track milestone thresholds
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);
};

// Time on page tracking hook
export const useTimeTracking = () => {
  const { trackTimeOnPage } = useEventTracking();

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [trackTimeOnPage]);
};

// Simple page view tracking hook
export const usePageView = (pageName: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  }, [pageName]);
};

// Extend Window interface
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}