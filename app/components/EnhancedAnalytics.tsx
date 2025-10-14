import React, { useEffect, useCallback } from 'react';

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
    localStorage.setItem('analytics_events', JSON.stringify(storedEvents.slice(-200))); // Keep last 200 events
  }, []);

  // Track user interactions
  const trackUserInteraction = useCallback((element: string, action: string) => {
    trackEvent({
      action,
      category: 'User Interaction',
      label: element
    });
  }, [trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback((metric: string, value: number) => {
    trackEvent({
      action: metric,
      category: 'Performance',
      value: Math.round(value)
    });
  }, [trackEvent]);

  // Track errors
  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent({
      action: 'Error',
      category: 'Error Tracking',
      label: context || 'Unknown',
      value: 1
    });
  }, [trackEvent]);

  useEffect(() => {
    // Track initial page view
    trackPageView(
      window.location.pathname,
      document.title,
      window.location.href
    );

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trackEvent({
          action: 'Page Hidden',
          category: 'User Behavior'
        });
      } else {
        trackEvent({
          action: 'Page Visible',
          category: 'User Behavior'
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if (scrollDepth >= 25 && scrollDepth < 50) {
          trackEvent({
            action: 'Scroll Depth',
            category: 'User Behavior',
            label: '25%',
            value: 25
          });
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          trackEvent({
            action: 'Scroll Depth',
            category: 'User Behavior',
            label: '50%',
            value: 50
          });
        } else if (scrollDepth >= 75 && scrollDepth < 90) {
          trackEvent({
            action: 'Scroll Depth',
            category: 'User Behavior',
            label: '75%',
            value: 75
          });
        } else if (scrollDepth >= 90) {
          trackEvent({
            action: 'Scroll Depth',
            category: 'User Behavior',
            label: '90%',
            value: 90
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track form interactions
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackEvent({
        action: 'Form Submit',
        category: 'User Interaction',
        label: form.id || form.className || 'Unknown Form'
      });
    };

    document.addEventListener('submit', handleFormSubmit);

    // Track button clicks
    const handleButtonClick = (event: Event) => {
      const button = event.target as HTMLButtonElement;
      trackUserInteraction(button.textContent || button.className || 'Unknown Button', 'Click');
    };

    document.addEventListener('click', handleButtonClick);

    // Track external links
    const handleLinkClick = (event: Event) => {
      const link = event.target as HTMLAnchorElement;
      if (link.href && !link.href.startsWith(window.location.origin)) {
        trackEvent({
          action: 'External Link Click',
          category: 'User Interaction',
          label: link.href
        });
      }
    };

    document.addEventListener('click', handleLinkClick);

    // Track performance metrics
    const trackWebVitals = () => {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          trackPerformance('FCP', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackPerformance('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
          if (entry.processingStart && entry.startTime) {
            trackPerformance('FID', entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput && entry.value) {
            clsValue += entry.value;
            trackPerformance('CLS', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    };

    trackWebVitals();

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleButtonClick);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [trackPageView, trackEvent, trackUserInteraction, trackPerformance]);

  // Expose tracking functions globally for manual tracking
  useEffect(() => {
    (window as typeof window & {
      trackEvent?: typeof trackEvent;
      trackUserInteraction?: typeof trackUserInteraction;
      trackPerformance?: typeof trackPerformance;
      trackError?: typeof trackError;
    }).trackEvent = trackEvent;
    (window as typeof window & {
      trackEvent?: typeof trackEvent;
      trackUserInteraction?: typeof trackUserInteraction;
      trackPerformance?: typeof trackPerformance;
      trackError?: typeof trackError;
    }).trackUserInteraction = trackUserInteraction;
    (window as typeof window & {
      trackEvent?: typeof trackEvent;
      trackUserInteraction?: typeof trackUserInteraction;
      trackPerformance?: typeof trackPerformance;
      trackError?: typeof trackError;
    }).trackPerformance = trackPerformance;
    (window as typeof window & {
      trackEvent?: typeof trackEvent;
      trackUserInteraction?: typeof trackUserInteraction;
      trackPerformance?: typeof trackPerformance;
      trackError?: typeof trackError;
    }).trackError = trackError;

    return () => {
      delete (window as typeof window & {
        trackEvent?: typeof trackEvent;
        trackUserInteraction?: typeof trackUserInteraction;
        trackPerformance?: typeof trackPerformance;
        trackError?: typeof trackError;
      }).trackEvent;
      delete (window as typeof window & {
        trackEvent?: typeof trackEvent;
        trackUserInteraction?: typeof trackUserInteraction;
        trackPerformance?: typeof trackPerformance;
        trackError?: typeof trackError;
      }).trackUserInteraction;
      delete (window as typeof window & {
        trackEvent?: typeof trackEvent;
        trackUserInteraction?: typeof trackUserInteraction;
        trackPerformance?: typeof trackPerformance;
        trackError?: typeof trackError;
      }).trackPerformance;
      delete (window as typeof window & {
        trackEvent?: typeof trackEvent;
        trackUserInteraction?: typeof trackUserInteraction;
        trackPerformance?: typeof trackPerformance;
        trackError?: typeof trackError;
      }).trackError;
    };
  }, [trackEvent, trackUserInteraction, trackPerformance, trackError]);

  return null;
};

export default EnhancedAnalytics;