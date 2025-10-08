import React, { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

const EnhancedAnalytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      if (typeof window !== 'undefined' && !(window as any).gtag) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX'}`;
        document.head.appendChild(script);

        // Initialize gtag
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', process.env.REACT_APP_GA_ID || 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track clicks on external links
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');
        
        if (link && link.href && !link.href.startsWith(window.location.origin)) {
          (window as any).gtag?.('event', 'click', {
            event_category: 'External Link',
            event_label: link.href,
            transport_type: 'beacon',
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        (window as any).gtag?.('event', 'form_submit', {
          event_category: 'Form',
          event_label: form.id || form.className || 'Unknown Form',
        });
      });

      // Track phone number clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.matches('a[href^="tel:"]')) {
          (window as any).gtag?.('event', 'phone_click', {
            event_category: 'Contact',
            event_label: target.getAttribute('href'),
          });
        }
      });

      // Track email clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.matches('a[href^="mailto:"]')) {
          (window as any).gtag?.('event', 'email_click', {
            event_category: 'Contact',
            event_label: target.getAttribute('href'),
          });
        }
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestone scroll depths
          if (scrollPercent >= 25 && maxScroll < 50) {
            (window as any).gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '25%',
            });
          } else if (scrollPercent >= 50 && maxScroll < 75) {
            (window as any).gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '50%',
            });
          } else if (scrollPercent >= 75 && maxScroll < 90) {
            (window as any).gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '75%',
            });
          } else if (scrollPercent >= 90) {
            (window as any).gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '90%',
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        // Track time milestones
        if (timeSpent === 30) {
          (window as any).gtag?.('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: '30 seconds',
            value: timeSpent,
          });
        } else if (timeSpent === 60) {
          (window as any).gtag?.('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: '1 minute',
            value: timeSpent,
          });
        } else if (timeSpent === 120) {
          (window as any).gtag?.('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: '2 minutes',
            value: timeSpent,
          });
        }
      };

      const interval = setInterval(trackTime, 1000);
      return () => clearInterval(interval);
    };

    // Initialize analytics
    initGA();
    trackPageView();
    trackInteractions();
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();

    // Cleanup
    return () => {
      cleanupScroll?.();
      cleanupTime?.();
    };
  }, []);

  return null;
};

// Utility function to track custom events
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// Utility function to track page views
export const trackPageView = (pageName: string, pagePath: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
    });
  }
};

export default EnhancedAnalytics;