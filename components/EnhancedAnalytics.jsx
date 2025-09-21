import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EnhancedAnalytics() {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics 4
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics
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

      // Track page views on route change
      const handleRouteChange = (url) => {
        gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  // Track custom events
  const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Track performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track Core Web Vitals
      const trackWebVitals = (metric) => {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      };

      // Track LCP
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              trackWebVitals({
                name: 'LCP',
                value: entry.startTime,
                id: entry.id,
              });
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Track FID
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              trackWebVitals({
                name: 'FID',
                value: entry.processingStart - entry.startTime,
                id: entry.id,
              });
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Track CLS
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          trackWebVitals({
            name: 'CLS',
            value: clsValue,
            id: 'cls-observer',
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    }
  }, []);

  // Expose tracking functions globally for use in components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.trackEvent = trackEvent;
    }
  }, []);

  return null;
}

// Helper functions for tracking specific events
export const trackButtonClick = (buttonName, location) => {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent('click', 'Button', `${buttonName} - ${location}`);
  }
};

export const trackFormSubmit = (formName) => {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent('submit', 'Form', formName);
  }
};

export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent('page_view', 'Navigation', pageName);
  }
};

export const trackServiceInterest = (serviceName) => {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent('service_interest', 'Services', serviceName);
  }
};

export const trackContactAttempt = (method) => {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent('contact_attempt', 'Contact', method);
  }
};