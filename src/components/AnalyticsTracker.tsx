import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  children: React.ReactNode;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initializeAnalytics = () => {
      // Track page views
      const trackPageView = (path: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: path,
          });
        }
      };

      // Track user interactions
      const trackUserInteraction = (action: string, category: string, label?: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: 1,
          });
        }
      };

      // Track performance metrics
      const trackPerformance = () => {
        if (typeof window !== 'undefined' && window.performance) {
          const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = window.performance.getEntriesByType('paint');
          
          if (navigation) {
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
            
            if (window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'load_time',
                value: Math.round(loadTime),
              });
              
              window.gtag('event', 'timing_complete', {
                name: 'dom_content_loaded',
                value: Math.round(domContentLoaded),
              });
            }
          }
          
          if (paint.length > 0) {
            const firstPaint = paint.find(entry => entry.name === 'first-paint');
            const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');
            
            if (firstPaint && window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'first_paint',
                value: Math.round(firstPaint.startTime),
              });
            }
            
            if (firstContentfulPaint && window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'first_contentful_paint',
                value: Math.round(firstContentfulPaint.startTime),
              });
            }
          }
        }
      };

      // Track Core Web Vitals
      const trackCoreWebVitals = () => {
        if (typeof window !== 'undefined' && window.gtag) {
          // Track Largest Contentful Paint (LCP)
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            window.gtag('event', 'timing_complete', {
              name: 'largest_contentful_paint',
              value: Math.round(lastEntry.startTime),
            });
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // Track First Input Delay (FID)
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              window.gtag('event', 'timing_complete', {
                name: 'first_input_delay',
                value: Math.round(entry.processingStart - entry.startTime),
              });
            });
          }).observe({ entryTypes: ['first-input'] });

          // Track Cumulative Layout Shift (CLS)
          let clsValue = 0;
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            window.gtag('event', 'timing_complete', {
              name: 'cumulative_layout_shift',
              value: Math.round(clsValue * 1000),
            });
          }).observe({ entryTypes: ['layout-shift'] });
        }
      };

      // Track user engagement
      const trackUserEngagement = () => {
        let startTime = Date.now();
        let isActive = true;

        const trackEngagement = () => {
          if (isActive) {
            const engagementTime = Date.now() - startTime;
            if (window.gtag) {
              window.gtag('event', 'user_engagement', {
                engagement_time_msec: engagementTime,
              });
            }
          }
        };

        // Track when user becomes inactive
        const handleVisibilityChange = () => {
          if (document.hidden) {
            isActive = false;
            trackEngagement();
          } else {
            isActive = true;
            startTime = Date.now();
          }
        };

        // Track when user leaves the page
        const handleBeforeUnload = () => {
          trackEngagement();
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      };

      // Initialize all tracking
      trackPageView(window.location.pathname);
      trackPerformance();
      trackCoreWebVitals();
      const cleanupEngagement = trackUserEngagement();

      // Track route changes
      const handleRouteChange = () => {
        trackPageView(window.location.pathname);
      };

      window.addEventListener('popstate', handleRouteChange);

      return () => {
        cleanupEngagement();
        window.removeEventListener('popstate', handleRouteChange);
      };
    };

    const cleanup = initializeAnalytics();
    return cleanup;
  }, []);

  return <>{children}</>;
};

export default AnalyticsTracker;