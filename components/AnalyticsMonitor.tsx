import React, { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

export default function AnalyticsMonitor() {
  useEffect(() => {
    // Initialize analytics tracking
    const trackEvent = (event: AnalyticsEvent) => {
      // Send to Google Analytics (if configured)
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }).catch(console.error);

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event);
      }
    };

    // Track page views
    const trackPageView = () => {
      trackEvent({
        event: 'page_view',
        category: 'Navigation',
        action: 'Page View',
        label: window.location.pathname,
        timestamp: Date.now(),
      });
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const button = target.closest('button') || target;
          trackEvent({
            event: 'button_click',
            category: 'Interaction',
            action: 'Button Click',
            label: button.textContent?.trim() || 'Unknown Button',
            timestamp: Date.now(),
          });
        }

        // Track link clicks
        if (target.tagName === 'A' || target.closest('a')) {
          const link = target.closest('a') || target;
          const href = link.getAttribute('href');
          trackEvent({
            event: 'link_click',
            category: 'Navigation',
            action: 'Link Click',
            label: href || 'Unknown Link',
            timestamp: Date.now(),
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        trackEvent({
          event: 'form_submit',
          category: 'Interaction',
          action: 'Form Submit',
          label: form.id || form.className || 'Unknown Form',
          timestamp: Date.now(),
        });
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track at 25%, 50%, 75%, and 100%
          if ([25, 50, 75, 100].includes(scrollDepth)) {
            trackEvent({
              event: 'scroll_depth',
              category: 'Engagement',
              action: 'Scroll Depth',
              label: `${scrollDepth}%`,
              value: scrollDepth,
              timestamp: Date.now(),
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent({
          event: 'time_on_page',
          category: 'Engagement',
          action: 'Time on Page',
          label: `${timeOnPage} seconds`,
          value: timeOnPage,
          timestamp: Date.now(),
        });
      };

      // Track time on page every 30 seconds
      const timeInterval = setInterval(trackTimeOnPage, 30000);

      // Track when user leaves the page
      window.addEventListener('beforeunload', () => {
        trackTimeOnPage();
        clearInterval(timeInterval);
      });

      return () => {
        clearInterval(timeInterval);
        window.removeEventListener('scroll', trackScrollDepth);
      };
    };

    // Track performance metrics
    const trackPerformance = () => {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          let metricName = '';
          let value = 0;

          switch (entry.entryType) {
            case 'largest-contentful-paint':
              metricName = 'LCP';
              value = entry.startTime;
              break;
            case 'first-input':
              metricName = 'FID';
              value = entry.processingStart - entry.startTime;
              break;
            case 'layout-shift':
              metricName = 'CLS';
              value = entry.value;
              break;
          }

          if (metricName) {
            trackEvent({
              event: 'performance_metric',
              category: 'Performance',
              action: metricName,
              label: `${metricName} Measurement`,
              value: Math.round(value),
              timestamp: Date.now(),
            });
          }
        });
      });

      observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
      });

      return () => observer.disconnect();
    };

    // Track errors
    const trackErrors = () => {
      window.addEventListener('error', (e) => {
        trackEvent({
          event: 'javascript_error',
          category: 'Error',
          action: 'JavaScript Error',
          label: e.message,
          timestamp: Date.now(),
        });
      });

      window.addEventListener('unhandledrejection', (e) => {
        trackEvent({
          event: 'promise_rejection',
          category: 'Error',
          action: 'Unhandled Promise Rejection',
          label: e.reason?.toString() || 'Unknown Error',
          timestamp: Date.now(),
        });
      });
    };

    // Initialize all tracking
    trackPageView();
    const cleanupInteractions = trackInteractions();
    const cleanupPerformance = trackPerformance();
    trackErrors();

    return () => {
      cleanupInteractions?.();
      cleanupPerformance?.();
    };
  }, []);

  return null;
}