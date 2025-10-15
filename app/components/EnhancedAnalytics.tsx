import React, { useEffect } from 'react';
interface EnhancedAnalyticsProps {
  eventName?: string;
  eventProperties?: Record<string, unknown>;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  eventName,
  eventProperties
}) => {
  useEffect(() => {
    // Enhanced analytics tracking
    const trackEvent = (event: string, properties?: Record<string, unknown>) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event, {
          event_category: 'Enhanced Analytics',
          ...properties
        });
      }
    };

    // Track page view
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    // Track user engagement
    const trackEngagement = () => {
      let startTime = Date.now();
      let maxScrollDepth = 0;
      let isActive = true;

      const trackScroll = () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
      };

      const trackVisibility = () => {
        isActive = !document.hidden;
        if (isActive) {
          startTime = Date.now();
        }
      };

      const trackTimeOnPage = () => {
        const timeSpent = Date.now() - startTime;
        trackEvent('time_on_page', {
          time_spent: timeSpent,
          max_scroll_depth: maxScrollDepth
        });
      };

      // Add event listeners
      window.addEventListener('scroll', trackScroll, { passive: true });
      document.addEventListener('visibilitychange', trackVisibility);
      window.addEventListener('beforeunload', trackTimeOnPage);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScroll);
        document.removeEventListener('visibilitychange', trackVisibility);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    };

    // Initialize tracking
    trackPageView();
    const cleanup = trackEngagement();

    // Track custom event if provided
    if (eventName) {
      trackEvent(eventName, eventProperties);
    }

    return cleanup;
  }, [eventName, eventProperties]);

  return null; // This component doesn't render anything
};

export default EnhancedAnalytics;