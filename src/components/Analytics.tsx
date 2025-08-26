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

    // Track custom events for important interactions
    const trackCustomEvents = () => {
      // Track form submissions
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', () => {
          if (window.gtag) {
            window.gtag('event', 'form_submit', {
              form_name: form.getAttribute('data-form-name') || 'unknown',
              page_path: location.pathname
            });
          }
        });
      });

      // Track button clicks
      const buttons = document.querySelectorAll('button[data-analytics]');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const eventName = button.getAttribute('data-analytics');
          const eventCategory = button.getAttribute('data-category') || 'engagement';
          const eventLabel = button.getAttribute('data-label') || button.textContent;

          if (window.gtag && eventName) {
            window.gtag('event', eventName, {
              event_category: eventCategory,
              event_label: eventLabel,
              page_path: location.pathname
            });
          }
        });
      });

      // Track link clicks
      const links = document.querySelectorAll('a[data-analytics]');
      links.forEach(link => {
        link.addEventListener('click', () => {
          const eventName = link.getAttribute('data-analytics');
          const eventCategory = link.getAttribute('data-category') || 'navigation';
          const eventLabel = link.getAttribute('data-label') || link.textContent;
          const linkUrl = link.getAttribute('href');

          if (window.gtag && eventName) {
            window.gtag('event', eventName, {
              event_category: eventCategory,
              event_label: eventLabel,
              link_url: linkUrl,
              page_path: location.pathname
            });
          }
        });
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;

          // Track scroll milestones
          if ([25, 50, 75, 90].includes(maxScroll)) {
            if (window.gtag) {
              window.gtag('event', 'scroll_depth', {
                scroll_percentage: maxScroll,
                page_path: location.pathname
              });
            }
          }
        }

        // Clear existing timeout
        clearTimeout(scrollTimeout);

        // Set new timeout to track scroll end
        scrollTimeout = setTimeout(() => {
          if (window.gtag && maxScroll > 0) {
            window.gtag('event', 'scroll_end', {
              final_scroll_percentage: maxScroll,
              page_path: location.pathname
            });
          }
        }, 1000);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      let timeTracked = false;

      const trackTime = () => {
        if (!timeTracked) {
          const timeOnPage = Math.round((Date.now() - startTime) / 1000);
          
          if (window.gtag) {
            window.gtag('event', 'time_on_page', {
              time_on_page: timeOnPage,
              page_path: location.pathname
            });
          }
          
          timeTracked = true;
        }
      };

      // Track when user leaves the page
      const handleBeforeUnload = () => trackTime();
      const handleVisibilityChange = () => {
        if (document.hidden) trackTime();
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Track after 30 seconds
      const timeout = setTimeout(trackTime, 30000);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        clearTimeout(timeout);
        trackTime();
      };
    };

    // Initialize tracking
    const scrollCleanup = trackScrollDepth();
    const timeCleanup = trackTimeOnPage();
    trackCustomEvents();

    return () => {
      scrollCleanup();
      timeCleanup();
    };
  }, [location.pathname]);

  // Track performance metrics
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                page_load_time: Math.round(navEntry.loadEventEnd - navEntry.loadEventStart),
                dom_content_loaded: Math.round(navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart),
                first_paint: Math.round(navEntry.responseStart - navEntry.requestStart),
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

  return null; // This component doesn't render anything
};

export default Analytics;