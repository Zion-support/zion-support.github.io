import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
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
        send_page_view: true,
      });
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: window.location.pathname,
          page_title: document.title,
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const buttonText = target.textContent?.trim() || 'Unknown';
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'Button',
              event_label: buttonText,
              value: 1,
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Form',
            event_label: form.id || form.className || 'Unknown Form',
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.href && target.href.startsWith('tel:')) {
          if (window.gtag) {
            window.gtag('event', 'phone_click', {
              event_category: 'Contact',
              event_label: 'Phone Number',
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.href && target.href.startsWith('mailto:')) {
          if (window.gtag) {
            window.gtag('event', 'email_click', {
              event_category: 'Contact',
              event_label: 'Email Address',
            });
          }
        }
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestone scroll depths
          if (maxScroll >= 25 && maxScroll < 50) {
            window.gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '25%',
            });
          } else if (maxScroll >= 50 && maxScroll < 75) {
            window.gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '50%',
            });
          } else if (maxScroll >= 75 && maxScroll < 90) {
            window.gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '75%',
            });
          } else if (maxScroll >= 90) {
            window.gtag?.('event', 'scroll', {
              event_category: 'Engagement',
              event_label: '90%',
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', trackScroll);
      };
    };

    // Initialize analytics
    initAnalytics();
    trackInteractions();
    const cleanupScroll = trackScrollDepth();

    // Track initial page view
    trackPageView();

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.gtag?.('event', 'page_hidden', {
          event_category: 'Engagement',
        });
      } else {
        window.gtag?.('event', 'page_visible', {
          event_category: 'Engagement',
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cleanupScroll();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;