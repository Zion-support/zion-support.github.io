import React, { useEffect } from 'react';

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, [enableGoogleAnalytics]);

  useEffect(() => {
    if (enablePerformanceMonitoring) {
      // Performance monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [enablePerformanceMonitoring]);

  useEffect(() => {
    if (enableErrorTracking) {
      // Error tracking
      window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
      });
    }
  }, [enableErrorTracking]);

  useEffect(() => {
    if (enableUserBehaviorTracking) {
      // User behavior tracking
      const trackClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          console.log('User clicked:', target.textContent);
        }
      };

      document.addEventListener('click', trackClick);
      return () => document.removeEventListener('click', trackClick);
    }
  }, [enableUserBehaviorTracking]);

  return null;
};

export default Analytics;

// Global type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}