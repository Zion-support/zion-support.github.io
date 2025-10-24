'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;
  }
}

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics && GA_TRACKING_ID) {
      initializeGoogleAnalytics();
    }
    
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring();
    }
    
    if (enableErrorTracking) {
      initializeErrorTracking();
    }
    
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking();
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

  const initializeGoogleAnalytics = () => {
    // Load Google Analytics
    if (typeof window !== 'undefined') {
      // Initialize gtag
      window.gtag = window.gtag || function() {
        (window.gtag as { q?: unknown[] }).q = (window.gtag as { q?: unknown[] }).q || [];
        (window.gtag as { q: unknown[] }).q.push(arguments);
      };

      // Load GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Configure GA
      window.gtag('js', new Date());
      window.gtag('config', GA_TRACKING_ID);
    }
  };

  const initializePerformanceMonitoring = () => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Performance monitoring logic
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  };

  const initializeErrorTracking = () => {
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Error tracked:', event.error);
        // Send error to analytics
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false
          });
        }
      });
    }
  };

  const initializeUserBehaviorTracking = () => {
    // Initialize user behavior tracking
    if (typeof window !== 'undefined') {
      // Track page views
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('config', GA_TRACKING_ID, {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      };

      // Track page view on load
      trackPageView();

      // Track page view on route change
      window.addEventListener('popstate', trackPageView);
    }
  };

  return null; // This component doesn't render anything visible
};

export default Analytics;