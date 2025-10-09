'use client';
import React, { useEffect, createContext, useContext, useCallback } from 'react';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

interface AnalyticsContextType {
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackPageView: (path: string) => void;
  trackError: (error: Error, context?: string) => void;
  trackPerformance: (metric: string, value: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }, []);

  const trackPageView = useCallback((path: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: path,
      });
    }
  }, []);

  const trackError = useCallback((error: Error, context?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter: context,
      });
    }
  }, []);

  const trackPerformance = useCallback((metric: string, value: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: metric,
        value: Math.round(value),
      });
    }
  }, []);

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

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackError,
    trackPerformance,
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export default AnalyticsProvider;