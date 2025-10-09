'use client';
import React, { useEffect } from 'react';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: unknown[]) {
        (window as any).dataLayer.push(args);
      }
      (window as { gtag: typeof gtag }).gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    };
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
        (window as { gtag: (...args: unknown[]) => void }).gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };
    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          const text = target.textContent?.trim() || '';
          const href = target.getAttribute('href') || '';
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'click', {
              event_category: 'engagement',
              event_label: text,
              value: href
            });
          }
        }
      });
      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        if ((window as { gtag: unknown }).gtag) {
          (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: form.id || 'contact_form'
          });
        }
      });
      // Track phone number clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if ((target as HTMLAnchorElement).href && (target as HTMLAnchorElement).href.startsWith('tel:')) {
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: (target as HTMLAnchorElement).href
            });
          }
        }
      });
    };
    // Handle route changes
    const handleRouteChange = () => {
      if ((window as { gtag: unknown }).gtag) {
        (window as { gtag: (...args: unknown[]) => void }).gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };

    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  return <>{children}</>;
};

// Simple analytics hook
export const useAnalytics = () => {
  const trackError = (error: Error, context?: string) => {
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: { context: context || 'unknown' }
      });
    }
  };

  const trackCustomEvent = (category: string, action: string, label?: string, value?: number, metadata?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...metadata
      });
    }
  };

  const trackTiming = (category: string, variable: string, value: number, label?: string) => {
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'timing_complete', {
        name: variable,
        value: value,
        event_category: category,
        event_label: label
      });
    }
  };

  const trackPerformance = (name: string, value: number, rating: string) => {
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'timing_complete', {
        name: name,
        value: value,
        event_category: 'performance',
        event_label: rating
      });
    }
  };

  return {
    trackError,
    trackCustomEvent,
    trackTiming,
    trackPerformance
  };
};

export default AnalyticsProvider;