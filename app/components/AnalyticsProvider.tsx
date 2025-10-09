import React, { useEffect } from 'react';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Google Analytics 4
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);


        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        (window as any).gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }

    };

    // Track page views
    const trackPageView = () => {

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_view', {

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
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const buttonText = target.textContent?.trim() || 'Unknown';
          const buttonHref = target.getAttribute('href') || '';
          
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'click', {
              event_category: 'engagement',
              event_label: buttonText,
              value: buttonHref,
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;

        const formName = form.getAttribute('name') || 'unknown_form';
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {

            event_category: 'engagement',
            event_label: formName,
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('tel:')) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'phone_click', {
              event_category: 'contact',

              event_label: 'phone_number',
            });
          }
        }
      });
    };

    // Track performance metrics
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            
            if (navigation && (window as any).gtag) {
              (window as any).gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
              });

              (window as any).gtag('event', 'timing_complete', {
                name: 'dom_content_loaded',
                value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
              });
            }
          }, 0);
        });
      }
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Track Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Track First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
            });
          });
        }).observe({ entryTypes: ['first-input'] });

        // Track Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000),
          });
        }).observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Initialize analytics
    initGoogleAnalytics();
    trackPageView();
    trackInteractions();
    trackPerformance();
    trackWebVitals();

    // Track route changes (for SPA)
    const handleRouteChange = () => {
      trackPageView();
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;