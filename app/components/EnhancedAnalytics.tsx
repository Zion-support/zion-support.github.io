'use client';

import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface AnalyticsServiceProps {
  children: React.ReactNode;
}

const AnalyticsService: React.FC<AnalyticsServiceProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      console.log('CLS:', metric);
      // Send to analytics service
      trackEvent('web_vitals', {
        metric: 'CLS',
        value: metric.value,
        rating: metric.rating
      });
    });

    onINP((metric) => {
      console.log('INP:', metric);
      trackEvent('web_vitals', {
        metric: 'INP',
        value: metric.value,
        rating: metric.rating
      });
    });

    onFCP((metric) => {
      console.log('FCP:', metric);
      trackEvent('web_vitals', {
        metric: 'FCP',
        value: metric.value,
        rating: metric.rating
      });
    });

    onLCP((metric) => {
      console.log('LCP:', metric);
      trackEvent('web_vitals', {
        metric: 'LCP',
        value: metric.value,
        rating: metric.rating
      });
    });

    onTTFB((metric) => {
      console.log('TTFB:', metric);
      trackEvent('web_vitals', {
        metric: 'TTFB',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track page views
    trackPageView(window.location.pathname);

    // Track user interactions
    const trackClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        trackEvent('click', {
          element: target.tagName,
          text: target.textContent?.slice(0, 50),
          href: (target as HTMLAnchorElement).href
        });
      }
    };

    document.addEventListener('click', trackClick);

    return () => {
      document.removeEventListener('click', trackClick);
    };
  }, []);

  return <>{children}</>;
};

// Analytics utility functions
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...params
    });
  }
  
  // Also send to custom analytics endpoint
  if (typeof window !== 'undefined') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        params,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      })
    }).catch(console.error);
  }
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
    });
  }
  
  trackEvent('page_view', {
    page_path: path
  });
};

export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView
  };
};

export default AnalyticsService;