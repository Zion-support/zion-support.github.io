'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

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
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (enableGoogleAnalytics && typeof window !== 'undefined') {
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        script.async = true;
        document.head.appendChild(script);

        window.gtag = function() {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push(arguments);
        };

        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }

    // Performance monitoring
    if (enablePerformanceMonitoring && typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }

    // Error tracking
    if (enableErrorTracking && typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
      });
    }

    // User behavior tracking
    if (enableUserBehaviorTracking && typeof window !== 'undefined') {
      const trackClick = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          console.log('User clicked:', target.textContent);
        }
      };

      document.addEventListener('click', trackClick);
      return () => document.removeEventListener('click', trackClick);
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

  return null;
};

export default Analytics;