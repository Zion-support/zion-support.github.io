import React, { useEffect, useRef } from 'react';

interface AdvancedAnalyticsProps {
  enableConversionTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  customEvents?: string[];
  debugMode?: boolean;
}

const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  enableConversionTracking = true,
  enablePerformanceTracking = true,
  enableErrorTracking = true,
  customEvents = [],
  debugMode = false
}) => {
  const analyticsRef = useRef<any>(null);

  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      if (debugMode) {
        console.log('Advanced Analytics initialized with options:', {
          enableConversionTracking,
          enablePerformanceTracking,
          enableErrorTracking,
          customEvents
        });
      }

      // Track page view
      trackPageView();

      // Set up performance tracking
      if (enablePerformanceTracking) {
        setupPerformanceTracking();
      }

      // Set up error tracking
      if (enableErrorTracking) {
        setupErrorTracking();
      }

      // Set up conversion tracking
      if (enableConversionTracking) {
        setupConversionTracking();
      }
    };

    initAnalytics();

    // Cleanup on unmount
    return () => {
      if (analyticsRef.current) {
        analyticsRef.current = null;
      }
    };
  }, [enableConversionTracking, enablePerformanceTracking, enableErrorTracking, customEvents, debugMode]);

  const trackPageView = () => {
    const pageData = {
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString(),
      referrer: document.referrer
    };

    if (debugMode) {
      console.log('Page view tracked:', pageData);
    }

    // Here you would typically send data to your analytics service
    // Example: analytics.track('page_view', pageData);
  };

  const setupPerformanceTracking = () => {
    // Track Core Web Vitals
    if ('web-vitals' in window) {
      // This would require the web-vitals library
      // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
    }

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      if (debugMode) {
        console.log('Page load time:', loadTime);
      }
    });
  };

  const setupErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      const errorData = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack,
        timestamp: new Date().toISOString()
      };

      if (debugMode) {
        console.log('Error tracked:', errorData);
      }

      // Here you would typically send error data to your analytics service
      // Example: analytics.track('error', errorData);
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const rejectionData = {
        reason: event.reason,
        timestamp: new Date().toISOString()
      };

      if (debugMode) {
        console.log('Unhandled rejection tracked:', rejectionData);
      }
    });
  };

  const setupConversionTracking = () => {
    // Track form submissions
    document.addEventListener('submit', (event) => {
      const formData = {
        formId: (event.target as HTMLFormElement).id || 'unknown',
        timestamp: new Date().toISOString()
      };

      if (debugMode) {
        console.log('Form submission tracked:', formData);
      }
    });

    // Track button clicks (you might want to be more specific)
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        const clickData = {
          element: target.tagName,
          text: target.textContent?.trim(),
          href: (target as HTMLAnchorElement).href,
          timestamp: new Date().toISOString()
        };

        if (debugMode) {
          console.log('Button/link click tracked:', clickData);
        }
      }
    });
  };

  const trackCustomEvent = (eventName: string, eventData?: any) => {
    const event = {
      name: eventName,
      data: eventData || {},
      timestamp: new Date().toISOString()
    };

    if (debugMode) {
      console.log('Custom event tracked:', event);
    }

    // Here you would typically send custom event data to your analytics service
    // Example: analytics.track(eventName, eventData);
  };

  // Expose tracking function globally for manual tracking
  useEffect(() => {
    (window as any).trackCustomEvent = trackCustomEvent;
    
    return () => {
      delete (window as any).trackCustomEvent;
    };
  }, []);

  return <></>;
};

export default AdvancedAnalytics;