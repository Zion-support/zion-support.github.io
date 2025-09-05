import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  enabled?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID,
  enabled = process.env.NODE_ENV === 'production'
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!enabled || !googleAnalyticsId || typeof window === 'undefined') return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', googleAnalyticsId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', googleAnalyticsId, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [enabled, googleAnalyticsId, router.events]);

  // Custom event tracking function
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (enabled && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Expose tracking function globally for use in components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = trackEvent;
    }
  }, [trackEvent]);

  return null;
};

// Performance monitoring
export const trackPerformance = (metricName: string, value: number, id?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metricName, {
      event_category: 'Performance',
      value: Math.round(value),
      custom_parameter_1: id,
    });
  }
};

// User interaction tracking
export const trackUserInteraction = (action: string, element: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'User Interaction',
      event_label: element,
    });
  }
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_parameter_1: context,
    });
  }
};

// Custom hook for tracking
export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return { trackEvent, trackPerformance, trackUserInteraction, trackError };
};

export default Analytics;