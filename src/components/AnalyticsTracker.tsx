import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    const trackPageView = () => {
      const event: AnalyticsEvent = {
        event: 'page_view',
        category: 'Navigation',
        action: 'Page View',
        label: location.pathname,
        timestamp: Date.now()
      };

      // Send to analytics service
      sendAnalyticsEvent(event);
    };

    trackPageView();
  }, [location]);

  // Track user interactions
  useEffect(() => {
    const trackInteractions = () => {
      // Track button clicks
      const buttons = document.querySelectorAll('button, a[href]');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const event: AnalyticsEvent = {
            event: 'click',
            category: 'User Interaction',
            action: 'Button Click',
            label: target.textContent || target.getAttribute('href') || 'Unknown',
            timestamp: Date.now()
          };
          sendAnalyticsEvent(event);
        });
      });

      // Track form submissions
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formData = new FormData(form as HTMLFormElement);
          const event: AnalyticsEvent = {
            event: 'form_submit',
            category: 'User Interaction',
            action: 'Form Submit',
            label: form.getAttribute('action') || 'Unknown Form',
            timestamp: Date.now()
          };
          sendAnalyticsEvent(event);
        });
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track milestone scroll depths
          if ([25, 50, 75, 90, 100].includes(scrollDepth)) {
            const event: AnalyticsEvent = {
              event: 'scroll_depth',
              category: 'User Engagement',
              action: 'Scroll Depth',
              label: `${scrollDepth}%`,
              value: scrollDepth,
              timestamp: Date.now()
            };
            sendAnalyticsEvent(event);
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        // Track milestone time periods
        if ([30, 60, 120, 300, 600].includes(timeOnPage)) {
          const event: AnalyticsEvent = {
            event: 'time_on_page',
            category: 'User Engagement',
            action: 'Time on Page',
            label: `${timeOnPage}s`,
            value: timeOnPage,
            timestamp: Date.now()
          };
          sendAnalyticsEvent(event);
        }
      };

      const timeInterval = setInterval(trackTimeOnPage, 1000);

      // Cleanup
      return () => {
        clearInterval(timeInterval);
        window.removeEventListener('scroll', trackScrollDepth);
      };
    };

    const cleanup = trackInteractions();
    return cleanup;
  }, [location]);

  // Track performance metrics
  useEffect(() => {
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const event: AnalyticsEvent = {
          event: 'performance',
          category: 'Performance',
          action: 'Page Load Time',
          label: 'Navigation Timing',
          value: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          timestamp: Date.now()
        };
        
        sendAnalyticsEvent(event);
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }
  }, []);

  return null;
};

// Send analytics event to your analytics service
const sendAnalyticsEvent = (event: AnalyticsEvent) => {
  // Example: Send to Google Analytics
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value
    });
  }

  // Example: Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(error => {
      console.error('Analytics tracking error:', error);
    });
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event);
  }
};

export default AnalyticsTracker;
export { AnalyticsTracker };