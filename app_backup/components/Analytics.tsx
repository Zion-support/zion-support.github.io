'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
}

export default function Analytics({ gaId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  useEffect(() => {
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', gaId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page views on route changes
    const handleRouteChange = () => {
      trackPageView();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Track initial page view
    trackPageView();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [gaId]);

  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', 'engagement', formName);
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string) => {
    trackEvent('click', 'engagement', buttonName);
  };

  // Track service page views
  const trackServiceView = (serviceName: string) => {
    trackEvent('view_service', 'engagement', serviceName);
  };

  // Track contact interactions
  const trackContactInteraction = (interactionType: string) => {
    trackEvent('contact_interaction', 'engagement', interactionType);
  };

  return null;
}

// Export tracking functions for use in other components
export const analytics = {
  trackEvent: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },
  trackFormSubmission: (formName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: formName,
      });
    }
  },
  trackButtonClick: (buttonName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: buttonName,
      });
    }
  },
  trackServiceView: (serviceName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_service', {
        event_category: 'engagement',
        event_label: serviceName,
      });
    }
  },
  trackContactInteraction: (interactionType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_interaction', {
        event_category: 'engagement',
        event_label: interactionType,
      });
    }
  },
};