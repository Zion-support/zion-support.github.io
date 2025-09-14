import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', 'button', `${buttonName}${location ? `_${location}` : ''}`);
};

// Track navigation
export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', 'user_interaction', `${from}_to_${to}`);
};

// Analytics Provider Component
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        if (navigation) {
          trackEvent('timing_complete', 'performance', 'page_load_time', navigation.loadEventEnd - navigation.fetchStart);
        }
        
        if (paint.length > 0) {
          const firstPaint = paint.find(entry => entry.name === 'first-paint');
          const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');
          
          if (firstPaint) {
            trackEvent('timing_complete', 'performance', 'first_paint', firstPaint.startTime);
          }
          
          if (firstContentfulPaint) {
            trackEvent('timing_complete', 'performance', 'first_contentful_paint', firstContentfulPaint.startTime);
          }
        }
      }, 0);
    });
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_map: {
        error_stack: error.stack,
        error_info: errorInfo,
      },
    });
  }
};

// User engagement tracking
export const trackEngagement = (action: string, element: string) => {
  trackEvent(action, 'engagement', element);
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}