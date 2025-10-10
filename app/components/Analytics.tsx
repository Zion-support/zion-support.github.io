'use client';
import React, { useEffect } from 'react';

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    }
  }, [enableGoogleAnalytics]);

  useEffect(() => {
    if (enablePerformanceMonitoring) {
      // Performance monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP
            console.log('LCP:', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            // Track FID
            console.log('FID:', entry.processingStart - entry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            // Track CLS
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Track navigation timing
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      });

      return () => observer.disconnect();
    }
  }, [enablePerformanceMonitoring]);

  useEffect(() => {
    if (enableErrorTracking) {
      // Error tracking
      window.addEventListener('error', (event) => {
        console.error('JavaScript Error:', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error?.stack
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled Promise Rejection:', {
          reason: event.reason,
          promise: event.promise
        });
      });

      // Resource error tracking
      window.addEventListener('error', (event) => {
        if (event.target !== window) {
          console.error('Resource Error:', {
            src: (event.target as any).src || (event.target as any).href,
            error: event.type
          });
        }
      }, true);
    }
  }, [enableErrorTracking]);

  useEffect(() => {
    if (enableUserBehaviorTracking) {
      // Track user interactions
      const trackEvent = (event: string, action: string, parameters: Record<string, any>) => {
        console.log('User Event:', { event, action, parameters });
      };

      // Track clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          trackEvent('click', 'element_click', {
            element: target.tagName,
            text: target.textContent?.slice(0, 100),
            href: (target as HTMLAnchorElement).href
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        trackEvent('form', 'form_submit', {
          formId: form.id,
          formAction: form.action
        });
      });

      // Track scroll depth
      let maxScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          trackEvent('scroll', 'scroll_depth', {
            depth: scrollPercent
          });
        }
      });
    }
  }, [enableUserBehaviorTracking]);

  return null; // This component doesn't render anything
};

export default Analytics;