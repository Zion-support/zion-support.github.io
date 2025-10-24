<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'
=======
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314

<<<<<<< HEAD
=======
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
  enableUserBehaviorTracking = true
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
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true;
    });
  };

  const initializePerformanceMonitoring = () => {
    if ('PerformanceObserver' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            trackEvent('web_vitals', 'LCP', Math.round(entry.startTime));
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            trackEvent('web_vitals', 'FID', Math.round(fid));
          } else if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              trackEvent('web_vitals', 'CLS', (entry as any).value);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          trackEvent('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart));
        }
      });
    }
  };

  const initializeErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      trackEvent('error', 'javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack,
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent('error', 'unhandled_promise_rejection', {
        reason: event.reason,
        promise: event.promise,
      });
    });

    // Track resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        trackEvent('error', 'resource_error', {
          type: (event.target as any).tagName,
          src: (event.target as any).src || (event.target as any).href,
          error: event.type,
        });
      }
    }, true);
  };

  const initializeUserBehaviorTracking = () => {
    // Track page views
    trackEvent('page_view', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent('engagement', 'scroll_depth', maxScroll);
        }
      }
    });

    // Track time on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('engagement', 'time_on_page', timeOnPage);
    });

    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();

      if (tagName === 'a') {
        const href = (target as HTMLAnchorElement).href;
        trackEvent('engagement', 'link_click', {
          link_url: href,
          link_text: target.textContent?.trim(),
        });
      } else if (tagName === 'button') {
        trackEvent('engagement', 'button_click', {
          button_text: target.textContent?.trim(),
          button_class: target.className,
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      trackEvent('engagement', 'form_submit', {
        form_id: form.id,
        form_class: form.className,
        form_action: form.action,
      });
    });
  };

  const trackEvent = (category: string, action: string, value?: any) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: typeof value === 'object' ? JSON.stringify(value) : value,
        value: typeof value === 'number' ? value : undefined,
      });
    }
  };

  return null;
};

// Extend Window interface for gtag
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314

const Analytics: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with actual GA ID
      script.async = true;
      document.head.appendChild(script);

<<<<<<< HEAD
      // Initialize gtag
      window.gtag = function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-XXXXXXXXXX'); // Replace with actual GA ID

      // Track page views
      const trackPageView = (url: string) => {
        if (window.gtag) {
          window.gtag('config', 'G-XXXXXXXXXX', {
            page_path: url,
          });
        }
      }

      // Track user interactions
      const trackEvent = (action: string, category: string, label?: string, value?: number) => {
        if (window.gtag) {
          window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
          });
        }
      }

      // Track clicks on important elements
      const handleClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A') {
          const link = target as HTMLAnchorElement;
          trackEvent('click', 'link', link.href);
        } else if (target.tagName === 'BUTTON') {
          trackEvent('click', 'button', target.textContent || 'button');
        }
      }

      // Track scroll depth
      let maxScroll = 0;
      const handleScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          trackEvent('scroll', 'engagement', `${scrollPercent}%`);
        }
      }

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('timing', 'engagement', 'time_on_page', timeOnPage);
      }

      document.addEventListener('click', handleClick);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        document.removeEventListener('click', handleClick);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      }
    }
  }, [])

  return null
}
<<<<<<< HEAD

export default Analytics
=======
export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
  return (
    <div className={`analytics-component ${className}`} {...props}>
      {children}
    </div>
=======
// Analytics Provider for context
export const AnalyticsProvider: React.FC<{ children: React.ReactNode ,}> = ({ children }) => {
  return (
    <React.Fragment>
      <Analytics />
      {children}
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
