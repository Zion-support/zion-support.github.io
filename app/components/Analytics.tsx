import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual tracking ID
    
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views
    const trackPageView = () => {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    };

    // Track page view on load
    trackPageView();

    // Track page view on route change (for SPA)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(trackPageView, 100);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(trackPageView, 100);
    };

    window.addEventListener('popstate', () => {
      setTimeout(trackPageView, 100);
    });

    // Track custom events
    const trackEvent = (eventName: string, parameters: any = {}) => {
      gtag('event', eventName, parameters);
    };

    // Track button clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        const buttonText = target.textContent?.trim() || 'Unknown';
        trackEvent('button_click', {
          button_text: buttonText,
          button_location: target.closest('section')?.className || 'unknown',
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      trackEvent('form_submit', {
        form_id: form.id || 'unknown',
        form_class: form.className || 'unknown',
      });
    });

    // Track phone number clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.href && target.href.startsWith('tel:')) {
        trackEvent('phone_click', {
          phone_number: target.href.replace('tel:', ''),
        });
      }
    });

    // Track email clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.href && target.href.startsWith('mailto:')) {
        trackEvent('email_click', {
          email_address: target.href.replace('mailto:', ''),
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent('scroll_depth', {
            scroll_percent: maxScroll,
          });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        time_seconds: timeOnPage,
      });
    };

    // Track time on page when user leaves
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', trackTimeOnPage);
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;