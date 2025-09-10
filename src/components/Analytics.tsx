import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enabled?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env.REACT_APP_GA_TRACKING_ID,
  enabled = process.env.NODE_ENV === 'production'
}) => {
  useEffect(() => {
    if (!enabled || !trackingId) return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Track performance metrics
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstPaint = paint.find(p => p.name === 'first-paint')?.startTime || 0;
        const firstContentfulPaint = paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0;

        gtag('event', 'timing_complete', {
          name: 'load',
          value: Math.round(loadTime)
        });

        gtag('event', 'timing_complete', {
          name: 'first_paint',
          value: Math.round(firstPaint)
        });

        gtag('event', 'timing_complete', {
          name: 'first_contentful_paint',
          value: Math.round(firstContentfulPaint)
        });
      });
    }

    // Track user interactions
    const trackInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: target.textContent?.trim() || target.getAttribute('href') || 'unknown',
          value: 1
        });
      }
    };

    document.addEventListener('click', trackInteraction);

    // Track form submissions
    const trackFormSubmission = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.tagName === 'FORM') {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: form.getAttribute('id') || form.className || 'unknown_form',
          value: 1
        });
      }
    };

    document.addEventListener('submit', trackFormSubmission);

    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        gtag('event', 'scroll', {
          event_category: 'engagement',
          event_label: `${scrollPercent}%`,
          value: scrollPercent
        });
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('submit', trackFormSubmission);
      window.removeEventListener('scroll', trackScroll);
    };
  }, [trackingId, enabled]);

  // Track custom events
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (enabled && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Track page view
  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (enabled && window.gtag) {
      window.gtag('config', trackingId, {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  };

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    (window as any).trackEvent = trackEvent;
    (window as any).trackPageView = trackPageView;
  }, [trackEvent, trackPageView]);

  return null; // This component doesn't render anything
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
    trackPageView: (pagePath: string, pageTitle?: string) => void;
  }
}

export default Analytics;