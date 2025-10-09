import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // Load Google Analytics script
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
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const action = target.textContent?.trim() || 'Unknown Action';
          const category = target.closest('section')?.className || 'General';
          
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: category,
              event_label: action,
              value: 1
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        const formName = form.name || form.id || 'Unknown Form';
        
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Form',
            event_label: formName,
            value: 1
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' && target.href?.startsWith('tel:')) {
          if (window.gtag) {
            window.gtag('event', 'phone_click', {
              event_category: 'Contact',
              event_label: 'Phone Number',
              value: 1
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' && target.href?.startsWith('mailto:')) {
          if (window.gtag) {
            window.gtag('event', 'email_click', {
              event_category: 'Contact',
              event_label: 'Email Address',
              value: 1
            });
          }
        }
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const scrollThresholds = [25, 50, 75, 90, 100];
      const trackedThresholds = new Set();

      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
        }

        scrollThresholds.forEach((threshold) => {
          if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            
            if (window.gtag) {
              window.gtag('event', 'scroll', {
                event_category: 'Engagement',
                event_label: `${threshold}%`,
                value: threshold
              });
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const handleBeforeUnload = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        if (window.gtag) {
          window.gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Page Duration',
            value: timeOnPage
          });
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    };

    // Initialize analytics
    initGoogleAnalytics();
    trackPageView();
    trackInteractions();
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();

    // Cleanup function
    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default Analytics;