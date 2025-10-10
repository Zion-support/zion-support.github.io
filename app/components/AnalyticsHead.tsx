import React, { useEffect } from 'react';

interface AnalyticsHeadProps {
  gaMeasurementId?: string;
  gtmId?: string;
  fbPixelId?: string;
}

const AnalyticsHead: React.FC<AnalyticsHeadProps> = ({
  gaMeasurementId = 'G-XXXXXXXXXX',
  gtmId = 'GTM-XXXXXXX',
  fbPixelId = 'XXXXXXXXXXXXXXX'
}) => {
  useEffect(() => {
    // Google Analytics 4
    if (gaMeasurementId && gaMeasurementId !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaMeasurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Google Tag Manager
    if (gtmId && gtmId !== 'GTM-XXXXXXX') {
      (function(w: any, d: any, s: any, l: any, i: any) {
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', gtmId);
    }

    // Facebook Pixel
    if (fbPixelId && fbPixelId !== 'XXXXXXXXXXXXXXX') {
      !function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      (window as any).fbq('init', fbPixelId);
      (window as any).fbq('track', 'PageView');
    }

    // Track page performance
    const trackPerformance = () => {
      if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
          
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime)
            });
            window.gtag('event', 'timing_complete', {
              name: 'dom_content_loaded',
              value: Math.round(domContentLoaded)
            });
          }
        }
      }
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000)
              });
            }
          });

          getFID((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(metric.value)
              });
            }
          });

          getFCP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FCP',
                value: Math.round(metric.value)
              });
            }
          });

          getLCP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(metric.value)
              });
            }
          });

          getTTFB((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'TTFB',
                value: Math.round(metric.value)
              });
            }
          });
        });
      }
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
          if (window.gtag && scrollPercent % 25 === 0) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Initialize tracking
    trackPerformance();
    trackWebVitals();
    const cleanupScroll = trackScrollDepth();

    return () => {
      if (cleanupScroll) cleanupScroll();
    };
  }, [gaMeasurementId, gtmId, fbPixelId]);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

export default AnalyticsHead;