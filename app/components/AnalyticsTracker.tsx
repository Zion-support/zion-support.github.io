import React, { useEffect } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface AnalyticsTrackerProps {
  children: React.ReactNode;
  trackingId?: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX',
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page views
    const trackPageView = (url: string) => {
      if (window.gtag) {
        window.gtag('config', trackingId, {
          page_path: url,
          page_title: document.title,
        });
      }
    };

    // Track custom events
    const trackEvent = (event: AnalyticsEvent) => {
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }
    };

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const timing = performance.getEntriesByType(
            'navigation'
          )[0] as PerformanceNavigationTiming;
          if (timing) {
            const loadTime = timing.loadEventEnd - timing.fetchStart;
            trackEvent({
              action: 'page_load_time',
              category: 'Performance',
              label: 'Page Load',
              value: Math.round(loadTime),
            });
          }
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', event => {
        const target = event.target as HTMLElement;
        if (target.matches('button, a[href]')) {
          const action = target.textContent?.trim() || 'click';
          const category = target.closest('section')?.className || 'General';

          trackEvent({
            action: 'click',
            category: category,
            label: action,
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', event => {
        const form = event.target as HTMLFormElement;
        const formName = form.name || form.id || 'unknown_form';

        trackEvent({
          action: 'form_submit',
          category: 'Forms',
          label: formName,
        });
      });

      // Track scroll depth
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100
        );

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;

          // Track milestone scroll depths
          if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
            trackEvent({
              action: 'scroll_depth',
              category: 'Engagement',
              label: `${scrollPercent}%`,
              value: scrollPercent,
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });
    };

    // Initialize tracking
    initGA();
    trackPerformance();
    trackInteractions();

    // Track initial page view
    trackPageView(window.location.pathname);

    // Expose tracking functions globally for manual tracking
    (
      window as Window & {
        trackEvent?: typeof trackEvent;
        trackPageView?: typeof trackPageView;
      }
    ).trackEvent = trackEvent;
    (
      window as Window & {
        trackEvent?: typeof trackEvent;
        trackPageView?: typeof trackPageView;
      }
    ).trackPageView = trackPageView;
  }, [trackingId]);

  return <>{children}</>;
};

export default AnalyticsTracker;
