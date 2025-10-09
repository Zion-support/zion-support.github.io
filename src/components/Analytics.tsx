import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4
    const initGoogleAnalytics = () => {
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
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Web Vitals tracking
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('CLS:', metric);
            // Send to analytics
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000),
              });
            }
          });

          getFID((metric) => {
            console.log('FID:', metric);
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metric.value),
              });
            }
          });

          getFCP((metric) => {
            console.log('FCP:', metric);
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FCP',
                value: Math.round(metric.value),
              });
            }
          });

          getLCP((metric) => {
            console.log('LCP:', metric);
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metric.value),
              });
            }
          });

          getTTFB((metric) => {
            console.log('TTFB:', metric);
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'TTFB',
                value: Math.round(metric.value),
              });
            }
          });
        });
      }
    };

    // Custom event tracking
    const trackCustomEvents = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const eventName = target.getAttribute('data-track') || 'button_click';
          const eventCategory = target.getAttribute('data-category') || 'Engagement';
          const eventLabel = target.textContent?.trim() || 'Unknown';

          if ((window as any).gtag) {
            (window as any).gtag('event', eventName, {
              event_category: eventCategory,
              event_label: eventLabel,
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
            event_category: 'Engagement',
            event_label: formName,
          });
        }
      });

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent,
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });
    };

    // Initialize analytics
    initGoogleAnalytics();
    trackWebVitals();
    trackCustomEvents();
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;