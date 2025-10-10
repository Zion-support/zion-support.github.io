'use client';
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
  enableUserBehaviorTracking = true
}) => {
  useEffect(() => {
    // Initialize analytics
    const initializeAnalytics = () => {
      if (typeof window === 'undefined') return;

      // Google Analytics
      if (enableGoogleAnalytics) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      }

      // Performance monitoring
      if (enablePerformanceMonitoring) {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                // Track LCP
                console.log('LCP:', entry.startTime);
              }
            });
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
      }

      // Error tracking
      if (enableErrorTracking) {
        window.addEventListener('error', (event) => {
          console.error('Error tracked:', event.error);
        });
      }

      // User behavior tracking
      if (enableUserBehaviorTracking) {
        // Track clicks
        document.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          if (target.tagName === 'A') {
            console.log('Link clicked:', target.href);
          }
        });
      }
    };

    initializeAnalytics();
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

  return null;
};

export default Analytics;