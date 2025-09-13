import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsProps {
  trackingId?: string;
  enableDebug?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX',
  enableDebug = process.env.NODE_ENV === 'development'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        debug_mode: enableDebug
      });
    }
  }, [trackingId, location.pathname, enableDebug]);

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }

    // Track custom events
    trackCustomEvents();
  }, [location.pathname]);

  const trackCustomEvents = () => {
    // Track button clicks
    const trackButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button');
        if (button) {
          const text = button.textContent?.trim() || 'Unknown Button';
          const href = button.getAttribute('href') || button.getAttribute('data-href') || '';
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'button_click', {
              button_text: text,
              button_location: href,
              page_path: location.pathname
            });
          }
        }
      }
    };

    // Track form submissions
    const trackFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.tagName === 'FORM') {
        const formName = form.getAttribute('data-form-name') || form.action || 'Unknown Form';
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            form_name: formName,
            page_path: location.pathname
          });
        }
      }
    };

    // Track link clicks
    const trackLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.tagName === 'A' ? target : target.closest('a');
      if (link && link.href) {
        const linkText = link.textContent?.trim() || 'Unknown Link';
        const linkUrl = link.href;
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'link_click', {
            link_text: linkText,
            link_url: linkUrl,
            page_path: location.pathname
          });
        }
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(maxScroll)) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll_depth', {
              scroll_percentage: maxScroll,
              page_path: location.pathname
            });
          }
        }
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      // Track at 30 seconds, 1 minute, 2 minutes, and 5 minutes
      if ([30, 60, 120, 300].includes(timeSpent)) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'time_on_page', {
            time_spent_seconds: timeSpent,
            page_path: location.pathname
          });
        }
      }
    };

    // Add event listeners
    document.addEventListener('click', trackButtonClick);
    document.addEventListener('submit', trackFormSubmit);
    document.addEventListener('click', trackLinkClick);
    window.addEventListener('scroll', trackScrollDepth);
    
    // Track time on page every 30 seconds
    const timeInterval = setInterval(trackTimeOnPage, 30000);

    // Cleanup
    return () => {
      document.removeEventListener('click', trackButtonClick);
      document.removeEventListener('submit', trackFormSubmit);
      document.removeEventListener('click', trackLinkClick);
      window.removeEventListener('scroll', trackScrollDepth);
      clearInterval(timeInterval);
    };
  }, [location.pathname]);

  // Track performance metrics
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.navigationStart;
            
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'page_load_time', {
                load_time_ms: Math.round(loadTime),
                page_path: location.pathname
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, [location.pathname]);

  // Track errors
  useEffect(() => {
    const trackError = (event: ErrorEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: event.message,
          fatal: false,
          page_path: location.pathname
        });
      }
    };

    const trackUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: event.reason?.message || 'Unhandled Promise Rejection',
          fatal: false,
          page_path: location.pathname
        });
      }
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', trackUnhandledRejection);

    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackUnhandledRejection);
    };
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default Analytics;