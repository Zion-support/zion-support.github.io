'use client';
import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enabled?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  enabled = true
}) => {
  useEffect(() => {
    if (!enabled || !trackingId) return;
    
    initializeGoogleAnalytics();
    initializePerformanceMonitoring();
    initializeErrorTracking();
    initializeUserBehaviorTracking();
  }, [enabled, trackingId]);

  const initializeGoogleAnalytics = () => {
    if (!trackingId) return;
    
    const gtag = (...args: any[]) => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(args);
    };
    
    (window as any).gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href
    });
  };

  const initializePerformanceMonitoring = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP
          } else if (entry.entryType === 'first-input') {
            // Track FID
          } else if (entry.entryType === 'layout-shift') {
            // Track CLS
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (loadTime) {
          // Track page load time
        }
      });
    }
  };

  const initializeErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      // Track error
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      // Track promise rejection
    });

    // Track resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        // Track resource error
      }
    }, true);
  };

  const initializeUserBehaviorTracking = () => {
    // Track page views
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        // Track scroll depth
      }
    });

    // Track time on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      // Track time on page
    });

    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      
      if (tagName === 'a') {
        // Track link clicks
      } else if (tagName === 'button') {
        // Track button clicks
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      // Track form submission
    });
  };

  const trackEvent = (category: string, action: string, value?: any) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        value: value
      });
    }
  };

  return null;
};

export default Analytics;