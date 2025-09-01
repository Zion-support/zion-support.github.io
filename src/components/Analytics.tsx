import React, { useEffect } from 'react';

interface AnalyticsProps {}

export const Analytics: React.FC<AnalyticsProps> = () => {

  useEffect(() => {

    // Initialize analytics
    initializeAnalytics();
    
    // Track page views
    trackPageView();
    
    // Track performance metrics
    trackPerformance();
    
    // Track user engagement
    trackUserEngagement();
  }, []);

  const initializeAnalytics = () => {

    // Add Google Analytics or other analytics services here
    if (typeof window !== 'undefined' && window.gtag) {

      window.gtag('config', 'GA_MEASUREMENT_ID', {

        page_title: document.title,
        page_location: window.location.href});
    }
  };

  const trackPageView = () => {

    // Track page view
    const pageData = {

      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString(),
      referrer: document.referrer};

    // Send to analytics service
    sendAnalyticsEvent('page_view', pageData);
  };

  const trackPerformance = () => {

    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {

      try {

        // Track Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {

          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {

            sendAnalyticsEvent('web_vital', {

              metric: 'LCP',
              value: lastEntry.startTime,
              url: window.location.href});
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {

          const entries = list.getEntries();
          entries.forEach((entry) => {

            sendAnalyticsEvent('web_vital', {

              metric: 'FID',
              value: entry.processingStart - entry.startTime,
              url: window.location.href});
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Track Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {

          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {

            if (!entry.hadRecentInput) {

              clsValue += entry.value;
            }
          });
          sendAnalyticsEvent('web_vital', {

            metric: 'CLS',
            value: clsValue,
            url: window.location.href});
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {

        // // // console.warn('Performance tracking failed:', error);
      }
    }

    // Track page load time
    window.addEventListener('load', () => {

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {

        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        sendAnalyticsEvent('performance', {

          metric: 'page_load_time',
          value: loadTime,
          url: window.location.href});
      }
    });
  };

  const trackUserEngagement = () => {

    let startTime = Date.now();
    let isActive = true;

    // Track time on page
    const trackTimeOnPage = () => {

      if (isActive) {

        const timeSpent = Date.now() - startTime;
        sendAnalyticsEvent('engagement', {

          metric: 'time_on_page',
          value: timeSpent,
          url: window.location.href});
      }
    };

    // Track user activity
    const resetTimer = () => {

      if (!isActive) {

        isActive = true;
        startTime = Date.now();
      }
    };

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {

      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > maxScrollDepth) {

        maxScrollDepth = scrollPercent;
        if (maxScrollDepth >= 25 && maxScrollDepth % 25 === 0) {

          sendAnalyticsEvent('engagement', {

            metric: 'scroll_depth',
            value: maxScrollDepth,
            url: window.location.href});
        }
      }
    };

    // Add event listeners
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {

      document.addEventListener(event, resetTimer, true);
    });

    document.addEventListener('scroll', trackScrollDepth, { passive: true });

    // Track when user becomes inactive
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivityTimer = () => {

      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {

        isActive = false;
        trackTimeOnPage();
      }, 30000); // 30 seconds of inactivity
    };

    events.forEach(event => {

      document.addEventListener(event, resetInactivityTimer, true);
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {

      events.forEach(event => {

        document.removeEventListener(event, resetTimer, true);
        document.removeEventListener(event, resetInactivityTimer, true);
      });
      document.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      clearTimeout(inactivityTimer);
    };
  };

  const sendAnalyticsEvent = (eventType: string, data: any) => {

    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {

      window.gtag('event', eventType, data);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {

      // // // console.log('Analytics Event:', eventType, data);
    }

    // Store locally for offline analytics
    storeOfflineAnalytics(eventType, data);
  };

  const storeOfflineAnalytics = (eventType: string, data: any) => {

    try {

      const offlineEvents = JSON.parse(localStorage.getItem('offline_analytics') || '[]');
      offlineEvents.push({

        eventType,
        data,
        timestamp: new Date().toISOString()});
      
      // Keep only last 100 events
      if (offlineEvents.length > 100) {

        offlineEvents.splice(0, offlineEvents.length - 100);
      }
      
      localStorage.setItem('offline_analytics', JSON.stringify(offlineEvents));
    } catch (error) {

      // // // console.warn('Failed to store offline analytics:', error);
    }
  };

  return null; // This component doesn't render anything
};

// Extend Window interface for gtag
declare global {

  interface Window {

    gtag: (...args: any[]) => void;
  }
}