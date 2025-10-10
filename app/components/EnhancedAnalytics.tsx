'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface AnalyticsContextType {
  trackEvent: (category: string, action: string, label?: string, value?: number) => void;
  trackPageView: (page: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    }

    // Track Core Web Vitals
    onCLS((metric) => {
      trackEvent('web-vitals', 'CLS', metric.id, metric.value);
    });

    onINP((metric) => {
      trackEvent('web-vitals', 'INP', metric.id, metric.value);
    });

    onFCP((metric) => {
      trackEvent('web-vitals', 'FCP', metric.id, metric.value);
    });

    onLCP((metric) => {
      trackEvent('web-vitals', 'LCP', metric.id, metric.value);
    });

    onTTFB((metric) => {
      trackEvent('web-vitals', 'TTFB', metric.id, metric.value);
    });
  }, []);

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      });
    }
  };

  const trackConversion = (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value
      });
    }
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView, trackConversion }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;