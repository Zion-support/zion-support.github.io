'use client';
import { useEffect } from 'react';

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
    // Google Analytics setup
    if (enableGoogleAnalytics && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Performance monitoring
    if (enablePerformanceMonitoring && typeof window !== 'undefined') {
      const trackPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
            domInteractive: navigation.domInteractive - navigation.navigationStart,
          };

          // Send to analytics
          if ('gtag' in window) {
            (window as any).gtag('event', 'performance_metrics', {
              event_category: 'Performance',
              event_label: 'Page Load',
              custom_map: metrics,
            });
          }
        }
      };

      window.addEventListener('load', trackPerformance);
    }

    // Error tracking
    if (enableErrorTracking && typeof window !== 'undefined') {
      const handleError = (event: ErrorEvent) => {
        if ('gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.message,
            fatal: false,
            error_file: event.filename,
            error_line: event.lineno,
            error_column: event.colno,
          });
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        if ('gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.reason?.toString() || 'Unhandled Promise Rejection',
            fatal: false,
          });
        }
      };

      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }

    // User behavior tracking
    if (enableUserBehaviorTracking && typeof window !== 'undefined') {
      const trackClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const tagName = target.tagName.toLowerCase();
        
        if (['a', 'button'].includes(tagName)) {
          const text = target.textContent?.trim() || '';
          const href = target.getAttribute('href') || '';
          
          if ('gtag' in window) {
            (window as any).gtag('event', 'click', {
              event_category: 'User Interaction',
              event_label: `${tagName}: ${text || href}`,
              value: 1,
            });
          }
        }
      };

      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > 0 && scrollPercent % 25 === 0) {
          if ('gtag' in window) {
            (window as any).gtag('event', 'scroll', {
              event_category: 'User Behavior',
              event_label: `${scrollPercent}% scrolled`,
              value: scrollPercent,
            });
          }
        }
      };

      document.addEventListener('click', trackClick);
      window.addEventListener('scroll', trackScroll);

      return () => {
        document.removeEventListener('click', trackClick);
        window.removeEventListener('scroll', trackScroll);
      };
    }
  }, [
    enableGoogleAnalytics,
    enablePerformanceMonitoring,
    enableErrorTracking,
    enableUserBehaviorTracking
  ]);

  return null;
};

export default Analytics;