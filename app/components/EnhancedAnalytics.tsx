import React, { useEffect, useCallback, ReactNode } from 'react';

interface EnhancedAnalyticsProps {
  children: ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ children }) => {
  // Track page views
  const trackPageView = useCallback((pageName: string) => {
    console.log('Page View:', pageName);
    // In a real implementation, you would send this to your analytics service
  }, []);

  // Track events
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', eventName, properties);
    // In a real implementation, you would send this to your analytics service
  }, []);

  // Track user interactions
  const trackUserInteraction = useCallback((interaction: string, element: string) => {
    trackEvent('user_interaction', {
      interaction,
      element,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback((metric: string, value: number) => {
    trackEvent('performance_metric', {
      metric,
      value,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  useEffect(() => {
    // Track page load
    trackPageView(window.location.pathname);

    // Track performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          trackPerformance('page_load_time', navigation.loadEventEnd - navigation.loadEventStart);
          trackPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }
      });
    }

    // Track clicks
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        trackUserInteraction('click', target.tagName.toLowerCase());
      }
    };

    // Track form submissions
    const handleSubmit = (event: Event) => {
      const target = event.target as HTMLFormElement;
      if (target) {
        trackUserInteraction('form_submit', target.tagName.toLowerCase());
      }
    };

    // Track link clicks
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target && target.tagName === 'A') {
        trackUserInteraction('link_click', target.href);
      }
    };

    // Add event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);
    document.addEventListener('click', handleLinkClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [trackPageView, trackEvent, trackUserInteraction, trackPerformance]);

  return <>{children}</>;
};

export default EnhancedAnalytics;