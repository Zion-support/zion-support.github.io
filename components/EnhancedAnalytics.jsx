import { useEffect } from 'react';

const EnhancedAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics 4
    const initGA = () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        if (e.target.matches('button, a[href^="tel:"], a[href^="mailto:"]')) {
          const element = e.target;
          const action = element.textContent || element.getAttribute('aria-label') || 'click';
          const category = element.closest('section')?.id || 'general';
          
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: category,
              event_label: action,
              value: 1,
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: e.target.id || 'form',
            value: 1,
          });
        }
      });

      // Track scroll depth
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent,
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
    };

    // Track performance metrics
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        // Track Core Web Vitals
        const trackWebVitals = () => {
          // First Contentful Paint
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FCP',
                  value: Math.round(entry.startTime),
                });
              }
            }
          }).observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime),
            });
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
              });
            }
          }).observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsValue = 0;
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                window.gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'CLS',
                  value: Math.round(clsValue * 1000),
                });
              }
            }
          }).observe({ entryTypes: ['layout-shift'] });
        };

        // Track performance after page load
        if (document.readyState === 'complete') {
          trackWebVitals();
        } else {
          window.addEventListener('load', trackWebVitals);
        }
      }
    };

    // Initialize analytics
    initGA();
    trackPageView();
    trackInteractions();
    trackPerformance();

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (window.gtag) {
        window.gtag('event', 'visibility_change', {
          event_category: 'engagement',
          event_label: document.hidden ? 'hidden' : 'visible',
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default EnhancedAnalytics;