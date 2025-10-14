import React, { useEffect, useCallback } from 'react';

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

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
  timestamp: number;
}

const EnhancedAnalytics: React.FC = () => {
  // Track page views
  const trackPageView = useCallback((page: string, title: string, url: string) => {
    const pageView: PageView = {
      page,
      title,
      url,
      timestamp: Date.now()
    };

    // Send to analytics service
    console.log('Page view tracked:', pageView);

    // Store in localStorage for offline tracking
    const storedViews = JSON.parse(localStorage.getItem('analytics_page_views') || '[]');
    storedViews.push(pageView);
    localStorage.setItem('analytics_page_views', JSON.stringify(storedViews.slice(-100))); // Keep last 100 views
  }, []);

  // Track custom events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    const eventData = {
      ...event,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to analytics service
    console.log('Event tracked:', eventData);

    // Store in localStorage for offline tracking
    const storedEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    storedEvents.push(eventData);
    localStorage.setItem('analytics_events', JSON.stringify(storedEvents.slice(-1000))); // Keep last 1000 events
  }, []);

  // Track performance metrics
  const trackPerformance = useCallback(() => {
    if ('performance' in window) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            trackEvent({
              action: 'LCP',
              category: 'Performance',
              value: entry.startTime
            });
          } else if (entry.entryType === 'first-input') {
            trackEvent({
              action: 'FID',
              category: 'Performance',
              value: (entry as any).processingStart - entry.startTime
            });
          } else if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as LayoutShift;
            if (!layoutShift.hadRecentInput) {
              trackEvent({
                action: 'CLS',
                category: 'Performance',
                value: layoutShift.value
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }, [trackEvent]);

  // Track page visibility changes
  const trackVisibilityChange = useCallback(() => {
    document.addEventListener('visibilitychange', () => {
      trackEvent({
        action: 'visibility_change',
        category: 'User Behavior',
        label: document.hidden ? 'hidden' : 'visible'
      });
    });
  }, [trackEvent]);

  // Track scroll depth
  const trackScrollDepth = useCallback(() => {
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        trackEvent({
          action: 'scroll_depth',
          category: 'User Behavior',
          value: scrollPercent
        });
      }
    });
  }, [trackEvent]);

  // Track time on page
  const trackTimeOnPage = useCallback(() => {
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      trackEvent({
        action: 'time_on_page',
        category: 'User Behavior',
        value: timeOnPage
      });
    });
  }, [trackEvent]);

  // Initialize tracking
  useEffect(() => {
    // Track initial page view
    trackPageView(
      window.location.pathname,
      document.title,
      window.location.href
    );

    // Initialize other tracking
    trackPerformance();
    trackVisibilityChange();
    trackScrollDepth();
    trackTimeOnPage();

    // Track route changes (if using React Router)
    const handleRouteChange = () => {
      trackPageView(
        window.location.pathname,
        document.title,
        window.location.href
      );
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackPageView, trackPerformance, trackVisibilityChange, trackScrollDepth, trackTimeOnPage]);

  return null; // This component doesn't render anything
};

export default EnhancedAnalytics;