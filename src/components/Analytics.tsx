import React, { useEffect } from 'react';

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enableGoogleTagManager?: boolean;
  enableFacebookPixel?: boolean;
  enableCustomEvents?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enableGoogleTagManager = true,
  enableFacebookPixel = true,
  enableCustomEvents = true,
  enablePerformanceTracking = true,
  enableErrorTracking = true
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      setupGoogleAnalytics();
    }
    if (enableGoogleTagManager) {
      setupGoogleTagManager();
    }
    if (enableFacebookPixel) {
      setupFacebookPixel();
    }
    if (enableCustomEvents) {
      setupCustomEvents();
    }
    if (enablePerformanceTracking) {
      setupPerformanceTracking();
    }
    if (enableErrorTracking) {
      setupErrorTracking();
    }
  }, [enableGoogleAnalytics, enableGoogleTagManager, enableFacebookPixel, enableCustomEvents, enablePerformanceTracking, enableErrorTracking]);

  const setupGoogleAnalytics = () => {
    // Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true
    });

    // Enhanced ecommerce tracking
    gtag('config', process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      custom_map: {
        'custom_parameter_1': 'service_category',
        'custom_parameter_2': 'service_type'
      }
    });
  };

  const setupGoogleTagManager = () => {
    // Google Tag Manager
    (function(w: any, d: any, s: any, l: any, i: any) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', process.env.VITE_GTM_ID || 'GTM-XXXXXXX');

    // GTM container
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.VITE_GTM_ID || 'GTM-XXXXXXX'}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  };

  const setupFacebookPixel = () => {
    // Facebook Pixel
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

    (window as any).fbq('init', process.env.VITE_FB_PIXEL_ID || 'XXXXXXXXXXXXXXX');
    (window as any).fbq('track', 'PageView');
  };

  const setupCustomEvents = () => {
    // Track button clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a');
      
      if (button) {
        const buttonText = button.textContent?.trim();
        const buttonHref = button.getAttribute('href');
        
        // Track CTA clicks
        if (buttonText?.includes('Get Started') || buttonText?.includes('Contact') || buttonText?.includes('Call')) {
          trackEvent('cta_click', {
            button_text: buttonText,
            button_href: buttonHref,
            page_url: window.location.href
          });
        }

        // Track service clicks
        if (buttonHref?.includes('/ai-') || buttonHref?.includes('/it-') || buttonHref?.includes('/services')) {
          trackEvent('service_click', {
            service_url: buttonHref,
            service_name: buttonText,
            page_url: window.location.href
          });
        }
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formName = form.getAttribute('name') || 'unknown_form';
      
      trackEvent('form_submit', {
        form_name: formName,
        page_url: window.location.href
      });
    });

    // Track phone number clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.closest('a[href^="tel:"]')) {
        const phoneNumber = target.getAttribute('href')?.replace('tel:', '');
        trackEvent('phone_click', {
          phone_number: phoneNumber,
          page_url: window.location.href
        });
      }
    });

    // Track email clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.closest('a[href^="mailto:"]')) {
        const email = target.getAttribute('href')?.replace('mailto:', '');
        trackEvent('email_click', {
          email_address: email,
          page_url: window.location.href
        });
      }
    });
  };

  const setupPerformanceTracking = () => {
    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(trackWebVital);
        getFID(trackWebVital);
        getFCP(trackWebVital);
        getLCP(trackWebVital);
        getTTFB(trackWebVital);
      });
    }

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      trackEvent('page_load', {
        load_time: Math.round(loadTime),
        page_url: window.location.href
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
          trackEvent('scroll_depth', { depth: 25, page_url: window.location.href });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
          trackEvent('scroll_depth', { depth: 50, page_url: window.location.href });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 90) {
          trackEvent('scroll_depth', { depth: 75, page_url: window.location.href });
        } else if (maxScrollDepth >= 90) {
          trackEvent('scroll_depth', { depth: 90, page_url: window.location.href });
        }
      }
    });
  };

  const setupErrorTracking = () => {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      trackEvent('javascript_error', {
        error_message: event.message,
        error_filename: event.filename,
        error_lineno: event.lineno,
        error_colno: event.colno,
        page_url: window.location.href
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent('unhandled_promise_rejection', {
        error_message: event.reason?.message || 'Unknown error',
        page_url: window.location.href
      });
    });

    // Track 404 errors
    window.addEventListener('error', (event) => {
      if (event.target instanceof HTMLImageElement) {
        trackEvent('image_load_error', {
          image_src: event.target.src,
          page_url: window.location.href
        });
      }
    });
  };

  const trackEvent = (eventName: string, parameters: Record<string, any>) => {
    // Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }

    // Google Tag Manager
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters
      });
    }

    // Facebook Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', eventName, parameters);
    }

    // Custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          page_url: window.location.href
        })
      }).catch(() => {
        // Silently fail in case of network issues
      });
    }
  };

  const trackWebVital = (metric: any) => {
    trackEvent('web_vital', {
      metric_name: metric.name,
      metric_value: Math.round(metric.value),
      metric_rating: metric.rating,
      page_url: window.location.href
    });
  };

  return null;
};

export default Analytics;