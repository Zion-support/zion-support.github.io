'use client';
<<<<<<< HEAD

import React, { useEffect, createContext, useContext } from 'react';

interface AnalyticsContextType {
  trackPerformance: (name: string, value: number) => void;
  trackError: (error: Error, context?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

=======
>>>>>>> origin/main
const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initAnalytics = () => {
      const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
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
        if (target.href && target.href.startsWith('tel:')) {
          if ((window as { gtag: unknown }).gtag) {
            (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number',
              value: target.href
            });
          }
        }
      });
    };
    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();
<<<<<<< HEAD

    const handleRouteChange = () => {
      trackPageView();
    };

=======
>>>>>>> origin/main
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
<<<<<<< HEAD

  const trackPerformance = (name: string, value: number) => {
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'performance_metric', {
        event_category: 'performance',
        event_label: name,
        value: value
      });
    }
  };

  const trackError = (error: Error, context?: string) => {
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_context: context || 'unknown',
          error_stack: error.stack || ''
        }
      });
    }
  };

  const contextValue: AnalyticsContextType = {
    trackPerformance,
    trackError
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
=======
  return <>{children}</>;
>>>>>>> origin/main
};
export default AnalyticsProvider;