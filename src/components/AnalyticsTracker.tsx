import React, { useEffect } from 'react';';

interface AnalyticsTrackerProps {
  children: React.ReactNode;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Google Analytics 4
      if (typeof window !== 'undefined' && process.env.REACT_APP_GA_TRACKING_ID) {';
        const script = document.createElement('script');';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`;`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {,
          window.dataLayer.push(args);
        };
        gtag('js', new Date());';
        gtag('config', process.env.REACT_APP_GA_TRACKING_ID);';
      }

      // Custom analytics tracking
      const trackPageView = (path: string) => {,
        // Track page views
        if (typeof window !== 'undefined' && window.gtag) {';
          window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {';
            page_path: path,,
          });
        }

        // Custom analytics
        console.log('Page view tracked: ', path);';,
      };

      // Track initial page view
      trackPageView(window.location.pathname);

      // Track route changes
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function(...args) {
        originalPushState.apply(window.history, args);
        trackPageView(args[2] || window.location.pathname);
      };

      window.history.replaceState = function(...args) {
        originalReplaceState.apply(window.history, args);
        trackPageView(args[2] || window.location.pathname);
      };

      window.addEventListener('popstate', () => {';
        trackPageView(window.location.pathname);
      });
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track CTA clicks
      const trackCTAClick = (element: HTMLElement, action: string) => {,
        element.addEventListener('click', () => {';
          if (typeof window !== 'undefined' && window.gtag) {';
            window.gtag('event', 'click', {';
              event_category: 'CTA',';,
              event_label: action,,
            });
          }
          console.log('CTA clicked: ', action);';,
        });
      };

      // Track all CTA buttons
      const ctaButtons = document.querySelectorAll('[data-cta]');';
      ctaButtons.forEach((button) => {
        trackCTAClick(button as HTMLElement, (button as HTMLElement).dataset.cta || 'unknown');';
      });

      // Track form submissions
      const forms = document.querySelectorAll('form');';
      forms.forEach((form) => {
        form.addEventListener('submit', (e) => {';
          const formName = form.getAttribute('name') || 'unknown';';
          if (typeof window !== 'undefined' && window.gtag) {';
            window.gtag('event', 'form_submit', {';
              event_category: 'Form',';,
              event_label: formName,,
            });
          }
          console.log('Form submitted: ', formName);';,
        });
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
          maxScrollDepth = scrollDepth;
          if (typeof window !== 'undefined' && window.gtag) {';
            window.gtag('event', 'scroll', {';
              event_category: 'Engagement',';,
              event_label: `${scrollDepth}%`,`;
            });
          }
          console.log('Scroll depth: ', scrollDepth + '%');';,
        }
      };

      window.addEventListener('scroll', trackScrollDepth);';
    };

    // Initialize analytics and tracking
    initAnalytics();
    trackInteractions();

    // Re-track interactions when DOM changes
    const observer = new MutationObserver(() => {
      trackInteractions();
    });

    observer.observe(document.body, {
      childList: true,,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];,
    gtag: (...args: any[]) => void;,
  }
}

export default AnalyticsTracker;