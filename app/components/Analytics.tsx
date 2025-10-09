'use client';
import React, { useEffect } from 'react';

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  googleAnalyticsId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
  googleAnalyticsId = 'G-XXXXXXXXXX'
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics();
    }
    
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring();
    }
    
    if (enableErrorTracking) {
      initializeErrorTracking();
    }
    
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking();
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

  const initializeGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  const initializePerformanceMonitoring = () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime);
      });
    }
  };

  const initializeErrorTracking = () => {
    if (typeof window !== 'undefined') {
      // Track JavaScript errors
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error);
      });

      // Track unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
      });

      // Track resource loading errors
      window.addEventListener('error', (event) => {
        if (event.target !== window) {
          console.error('Resource loading error:', event);
        }
      }, true);
    }
  };

  const initializeUserBehaviorTracking = () => {
    if (typeof window !== 'undefined') {
      // Track page views
      console.log('Page view tracked:', window.location.pathname);

      // Track scroll depth
      let maxScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          console.log('Scroll depth:', maxScroll + '%');
        }
      });

      // Track time on page
      const startTime = Date.now();
      window.addEventListener('beforeunload', () => {
        const timeOnPage = Date.now() - startTime;
        console.log('Time on page:', timeOnPage + 'ms');
      });

      // Track clicks on important elements
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const tagName = target.tagName.toLowerCase();
        if (tagName === 'a') {
          console.log('Link clicked:', target.getAttribute('href'));
        } else if (tagName === 'button') {
          console.log('Button clicked:', target.textContent);
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        console.log('Form submitted:', form.action);
      });
    }
  };

  const trackEvent = (category: string, action: string, value?: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        value: value
      });
    }
  };

  return null;
};

export default Analytics;