import React, { useEffect, useState } from 'react';

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const AnalyticsMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics if available
    const initializeAnalytics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        // Configure Google Analytics
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            custom_parameter_1: 'user_type',
            custom_parameter_2: 'session_duration',
          },
        });

        setIsInitialized(true);
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Track custom events
    const trackEvent = (event: AnalyticsEvent) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.custom_parameters,
        });
      }
    };

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const performanceMetrics: PerformanceMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.navigationStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0, // Will be updated by LCP observer
          firstInputDelay: 0, // Will be updated by FID observer
          cumulativeLayoutShift: 0, // Will be updated by CLS observer
        };

        // Track Core Web Vitals
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          performanceMetrics.largestContentfulPaint = lastEntry.startTime;
          
          trackEvent({
            category: 'Web Vitals',
            action: 'LCP',
            label: window.location.pathname,
            value: Math.round(lastEntry.startTime),
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            performanceMetrics.firstInputDelay = entry.processingStart - entry.startTime;
            
            trackEvent({
              category: 'Web Vitals',
              action: 'FID',
              label: window.location.pathname,
              value: Math.round((entry.processingStart - entry.startTime) * 1000), // Convert to milliseconds
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              performanceMetrics.cumulativeLayoutShift = clsValue;
            }
          });

          if (clsValue > 0) {
            trackEvent({
              category: 'Web Vitals',
              action: 'CLS',
              label: window.location.pathname,
              value: Math.round(clsValue * 1000), // Convert to milliseconds
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        setMetrics(performanceMetrics);

        // Track general performance metrics
        trackEvent({
          category: 'Performance',
          action: 'Page Load Time',
          label: window.location.pathname,
          value: Math.round(performanceMetrics.pageLoadTime),
        });

        trackEvent({
          category: 'Performance',
          action: 'DOM Content Loaded',
          label: window.location.pathname,
          value: Math.round(performanceMetrics.domContentLoaded),
        });

        trackEvent({
          category: 'Performance',
          action: 'First Paint',
          label: window.location.pathname,
          value: Math.round(performanceMetrics.firstPaint),
        });

        trackEvent({
          category: 'Performance',
          action: 'First Contentful Paint',
          label: window.location.pathname,
          value: Math.round(performanceMetrics.firstContentfulPaint),
        });

        // Cleanup observers
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      const trackButtonClicks = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const button = target.closest('button') || target;
          trackEvent({
            category: 'User Interaction',
            action: 'Button Click',
            label: button.textContent?.trim() || button.getAttribute('aria-label') || 'Unknown Button',
          });
        }
      };

      // Track link clicks
      const trackLinkClicks = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.closest('a')) {
          const link = target.closest('a') || target;
          trackEvent({
            category: 'User Interaction',
            action: 'Link Click',
            label: link.href,
            custom_parameters: {
              link_text: link.textContent?.trim(),
              is_external: !link.href.startsWith(window.location.origin),
            },
          });
        }
      };

      // Track form submissions
      const trackFormSubmissions = (e: Event) => {
        const form = e.target as HTMLFormElement;
        if (form.tagName === 'FORM') {
          trackEvent({
            category: 'User Interaction',
            action: 'Form Submit',
            label: form.action || window.location.pathname,
            custom_parameters: {
              form_id: form.id,
              form_class: form.className,
            },
          });
        }
      };

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDepth = Math.round((scrollTop / documentHeight) * 100);
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track milestone scroll depths
          if (scrollDepth >= 25 && scrollDepth < 50 && maxScrollDepth >= 25) {
            trackEvent({
              category: 'User Engagement',
              action: 'Scroll Depth',
              label: '25%',
              value: 25,
            });
          } else if (scrollDepth >= 50 && scrollDepth < 75 && maxScrollDepth >= 50) {
            trackEvent({
              category: 'User Engagement',
              action: 'Scroll Depth',
              label: '50%',
              value: 50,
            });
          } else if (scrollDepth >= 75 && scrollDepth < 90 && maxScrollDepth >= 75) {
            trackEvent({
              category: 'User Engagement',
              action: 'Scroll Depth',
              label: '75%',
              value: 75,
            });
          } else if (scrollDepth >= 90 && maxScrollDepth >= 90) {
            trackEvent({
              category: 'User Engagement',
              action: 'Scroll Depth',
              label: '90%',
              value: 90,
            });
          }
        }
      };

      // Add event listeners
      document.addEventListener('click', trackButtonClicks);
      document.addEventListener('click', trackLinkClicks);
      document.addEventListener('submit', trackFormSubmissions);
      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track session duration
      const sessionStart = Date.now();
      const trackSessionDuration = () => {
        const sessionDuration = Math.round((Date.now() - sessionStart) / 1000);
        trackEvent({
          category: 'User Engagement',
          action: 'Session Duration',
          label: window.location.pathname,
          value: sessionDuration,
        });
      };

      // Track session duration on page unload
      window.addEventListener('beforeunload', trackSessionDuration);

      // Cleanup
      return () => {
        document.removeEventListener('click', trackButtonClicks);
        document.removeEventListener('click', trackLinkClicks);
        document.removeEventListener('submit', trackFormSubmissions);
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackSessionDuration);
      };
    };

    // Initialize everything
    initializeAnalytics();
    trackPageView();
    const cleanupPerformance = trackPerformance();
    const cleanupInteractions = trackInteractions();

    // Cleanup on unmount
    return () => {
      if (cleanupPerformance) cleanupPerformance();
      if (cleanupInteractions) cleanupInteractions();
    };
  }, []);

  // Track route changes (for SPA)
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Expose tracking function globally for manual tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = (event: AnalyticsEvent) => {
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
            ...event.custom_parameters,
          });
        }
      };
    }
  }, []);

  return null;
};

export default AnalyticsMonitor;