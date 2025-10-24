<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'
=======
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
=======
import React, { useEffect } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { useEffect } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
interface AnalyticsProps {
=======
interface AnalyticsProps {
interface AnalyticsProps {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
<<<<<<< HEAD
=======
const Analytics: React.FC<AnalyticsProps> = ({}
  enableGoogleAnalytics = true,
const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true;
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true
}) => {}
  useEffect(() => {}
    if (enableGoogleAnalytics) {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      initializeGoogleAnalytics();
=======
      initializeGoogleAnalytics()
    }
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring()
    }
    if (enableErrorTracking) {
      initializeErrorTracking()
    }
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking()
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking])

  const initializeGoogleAnalytics = () => {
    // Load Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
    }
  }

<<<<<<< HEAD
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

<<<<<<< HEAD
  const initializeGoogleAnalytics = () => {
=======
  const initializeGoogleAnalytics = () => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
<<<<<<< HEAD
    function gtag(...args: any[]) {
=======
    function gtag(...args: any[]) {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
<<<<<<< HEAD
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true;
=======
    gtag('config', 'GA_MEASUREMENT_ID', {)}
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });
    gtag('config', 'GA_MEASUREMENT_ID', {)
      page_title: document.title),
      page_location: window.location.href),
      send_page_view: true;
  };

  const initializePerformanceMonitoring = () => {}
    if ('PerformanceObserver' in window) {}
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) {}
          if (entry.entryType === 'largest-contentful-paint') {}
            trackEvent('web_vitals', 'LCP', Math.round(entry.startTime));
          } else if (entry.entryType === 'first-input') {}
            const fid = (entry as any).processingStart - entry.startTime;
            trackEvent('web_vitals', 'FID', Math.round(fid));
          } else if (entry.entryType === 'layout-shift') {}
            if (!(entry as any).hadRecentInput) {}
              trackEvent('web_vitals', 'CLS', (entry as any).value);
            }
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
<<<<<<< HEAD
            if (!(entry as any).hadRecentInput) {
              trackEvent('web_vitals', 'CLS', (entry as any).value);
            }
=======
            // Track CLS
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor page load time
<<<<<<< HEAD
      window.addEventListener('load', () => {
=======
      window.addEventListener('load', () => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          trackEvent('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart));
<<<<<<< HEAD
=======
      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (loadTime) {
          // Track page load time
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        }
      });
    }
  };

<<<<<<< HEAD
  const initializeErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      trackEvent('error', 'javascript_error', {
=======
  const initializeErrorTracking = () => {}
    // Track JavaScript errors
    window.addEventListener('error', (event) => {}
      trackEvent('error', 'javascript_error', {)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack,
      });
    });

<<<<<<< HEAD
    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent('error', 'unhandled_promise_rejection', {
=======

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {}
      trackEvent('error', 'unhandled_promise_rejection', {)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        reason: event.reason,
        promise: event.promise,
      });
    });

<<<<<<< HEAD
    // Track resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        trackEvent('error', 'resource_error', {
=======

    // Track resource loading errors
    window.addEventListener('error', (event) => {}
      if (event.target !== window) {}
        trackEvent('error', 'resource_error', {)}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          type: (event.target as any).tagName,
          src: (event.target as any).src || (event.target as any).href,
          error: event.type,
        });
<<<<<<< HEAD
=======
      trackEvent('error', 'javascript_error', {)
        message: event.message;)
        filename: event.filename;)
        lineno: event.lineno)
        colno: event.colno),
        error: event.error?.stack;
    // Track unhandled promise rejections;
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent('error', 'unhandled_promise_rejection', {)
        reason: event.reason),
        promise: event.promise;
    // Track resource loading errors;
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        trackEvent('error', 'resource_error', {)
          type: (event.target as any).tagName;
          src: (event.target as any).src || (event.target as any).href;
          error: event.type;
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      }
    }, true);
  };

<<<<<<< HEAD
  const initializeUserBehaviorTracking = () => {
=======
  const initializeUserBehaviorTracking = () => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    // Track page views
    trackEvent('page_view', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    // Track scroll depth
<<<<<<< HEAD
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
=======
    let maxScroll = 0;)
    // Track page views;
    trackEvent('page_view', 'page_view', {)
      page_title: document.title)
      page_location: window.location.href)
      page_path: window.location.pathname;
    // Track scroll depth;
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
    window.addEventListener('scroll', () => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent('engagement', 'scroll_depth', maxScroll);
        }
      }
    });

<<<<<<< HEAD
=======
    // Track time on page;
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {}
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('engagement', 'time_on_page', timeOnPage);
    });

    // Track clicks on important elements
    document.addEventListener('click', (event) => {}
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();

      if (tagName === 'a') {}
        const href = (target as HTMLAnchorElement).href;
          link_url: href,
          link_text: target.textContent?.trim()
        });
      } else if (tagName === 'button') {
        trackEvent('engagement', 'button_click', {)
    button_text: target.textContent?.trim(),
        trackEvent('engagement', 'link_click', {)}
          link_url: href,
          link_text: target.textContent?.trim()

      } else if (tagName === 'button') {}
        trackEvent('engagement', 'button_click', {)}
          button_text: target.textContent?.trim(),
          button_class: target.className
        });
        trackEvent('engagement', 'link_click', {)
          link_url: href),
          link_text: target.textContent?.trim()} else if (tagName === 'button') {
        trackEvent('engagement', 'button_click', {)
          button_text: target.textContent?.trim(),
          button_class: target.className;
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {}
      const form = event.target as HTMLFormElement;
      trackEvent('engagement', 'form_submit', {)}
        form_id: form.id,
        form_class: form.className,
        form_action: form.action
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
    window.addEventListener('scroll', () => {}
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (<<<scrollPercent>maxScroll</scrollPercent></scrollPercent>) {
        maxScroll = scrollPercent;
        // Track scroll depth
      }
    });

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
=======


    // Initialize analytics tracking
      // Google Analytics initialization

      if (typeof window !== 'undefined' && window.gtag) {window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      }
    });

<<<<<<< HEAD
    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      trackEvent('engagement', 'form_submit', {
        form_id: form.id,
        form_class: form.className,
        form_action: form.action,
      });
    });
<<<<<<< HEAD
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
=======
      trackEvent('engagement', 'form_submit', {)
        form_id: form.id),
        form_class: form.className),
        form_action: form.action;
  };
=======
  return <React.Fragment   />{children}</React.Fragment>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

        value: typeof value === 'number' ? value : undefined
  const trackEvent = (category: string, action: string, value?: any) => {
    if ((window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        value: value
      });
      (window as any).gtag('event', action, {)
        event_category: category),
        event_label: typeof value === 'object' ? JSON.stringify(value) : value;
        value: typeof value === 'number' ? value : undefined;
  trackingId?: string;
  children?: React.ReactNode;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

  return null;
};

// Extend Window interface for gtag
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
declare global {
  interface Window {
<<<<<<< HEAD
    gtag?: (...args: any[]) => void;
=======
  const initializePerformanceMonitoring = () => {
    // Performance monitoring setup
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (perfData) {
          console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart)
        }
      })
    }
  }

  const initializeErrorTracking = () => {
    // Error tracking setup
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error)
        // Send error to analytics service
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
    // User behavior tracking setup
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        console.log('Page view tracked:', window.location.pathname)
      }
      
      // Track clicks
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          console.log('Click tracked:', target.textContent)
        }
      }

      window.addEventListener('load', trackPageView)
      document.addEventListener('click', trackClick)

      return () => {
        window.removeEventListener('load', trackPageView)
        document.removeEventListener('click', trackClick)
      }
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
  }

  return null
}
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId);
    }
  }, [trackingId]);

  return <>{children}</>;
};
</AnalyticsProps>
export default Analytics;</AnalyticsProps>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
 void;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

export default Analytics
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
=======
const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    initAnalytics();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Analytics;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
