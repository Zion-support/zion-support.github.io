import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  pageName: string;
  customEvents?: Array<{
    event: string;
    data?: Record<string, any>;
  }>;
}

// Analytics tracking component with performance monitoring
const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ pageName, customEvents = [] }) => {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Track custom events
    const trackCustomEvents = () => {
      customEvents.forEach(({ event, data }) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', event, data);
        }
      });
    };

    // Performance monitoring
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            
            const metrics = {
              page_load_time: navigation.loadEventEnd - navigation.fetchStart,
              dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              first_paint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
              first_contentful_paint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
            };

            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'page_performance', {
                page_name: pageName,
                ...metrics
              });
            }
          }, 0);
        });
      }
    };

    // Core Web Vitals tracking
    const trackCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
          onCLS((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vital', {
                name: 'CLS',
                value: Math.round(metric.value * 1000),
                page_name: pageName
              });
            }
          });

          onINP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vital', {
                name: 'INP',
                value: Math.round(metric.value),
                page_name: pageName
              });
            }
          });

          onFCP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vital', {
                name: 'FCP',
                value: Math.round(metric.value),
                page_name: pageName
              });
            }
          });

          onLCP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vital', {
                name: 'LCP',
                value: Math.round(metric.value),
                page_name: pageName
              });
            }
          });

          onTTFB((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vital', {
                name: 'TTFB',
                value: Math.round(metric.value),
                page_name: pageName
              });
            }
          });
        }).catch(() => {
          // Silently fail if web-vitals is not available
        });
      }
    };

    trackPageView();
    trackCustomEvents();
    trackPerformance();
    trackCoreWebVitals();
  }, [pageName, customEvents]);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default AnalyticsTracker;