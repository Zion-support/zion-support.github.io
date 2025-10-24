'use client';

import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Analytics initialization would go here
    // For now, this is a placeholder component
    // console.log('Analytics component mounted');
  }, []);

  return null;
};

=======
    // Initialize analytics tracking
    const initializeAnalytics = () => {
      // Google Analytics 4 (GA4) initialization
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
        });

        // Track page views
        const trackPageView = () => {
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        };

        // Track initial page view
        trackPageView();

        // Track page views on navigation
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function(...args) {
          originalPushState.apply(history, args);
          setTimeout(trackPageView, 0);
        };

        history.replaceState = function(...args) {
          originalReplaceState.apply(history, args);
          setTimeout(trackPageView, 0);
        };

        window.addEventListener('popstate', trackPageView);
      }
    };

    // Initialize analytics after component mounts
    initializeAnalytics();

    // Track performance metrics
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            
            if (navigation && window.gtag) {
              // Track page load time
              const loadTime = navigation.loadEventEnd - navigation.fetchStart;
              window.gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime),
              });

              // Track Core Web Vitals
              if ('PerformanceObserver' in window) {
                // LCP - Largest Contentful Paint
                const lcpObserver = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Performance',
                    event_label: 'LCP',
                    value: Math.round(lastEntry.startTime),
                  });
                });
                
                try {
                  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                } catch {
                  // LCP observer not supported
                }

                // FID - First Input Delay
                const fidObserver = new PerformanceObserver((list) => {
                  list.getEntries().forEach((entry: any) => {
                    window.gtag('event', 'web_vitals', {
                      event_category: 'Performance',
                      event_label: 'FID',
                      value: Math.round(entry.processingStart - entry.startTime),
                    });
                  });
                });
                
                try {
                  fidObserver.observe({ entryTypes: ['first-input'] });
                } catch {
                  // FID observer not supported
                }

                // CLS - Cumulative Layout Shift
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                  list.getEntries().forEach((entry: any) => {
                    if (!entry.hadRecentInput) {
                      clsValue += entry.value;
                    }
                  });
                  window.gtag('event', 'web_vitals', {
                    event_category: 'Performance',
                    event_label: 'CLS',
                    value: Math.round(clsValue * 1000) / 1000,
                  });
                });
                
                try {
                  clsObserver.observe({ entryTypes: ['layout-shift'] });
                } catch {
                  // CLS observer not supported
                }
              }
            }
          }, 2000);
        });
      }
    };

    trackPerformance();

    // Track user interactions
    const trackInteractions = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        // Track clicks on important elements
        document.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const button = target.closest('button, a');
          
          if (button) {
            const text = button.textContent?.trim();
            const href = button.getAttribute('href');
            
            window.gtag('event', 'click', {
              event_category: 'User Interaction',
              event_label: text || 'Unknown Button',
              value: href || undefined,
            });
          }
        });

        // Track form submissions
        document.addEventListener('submit', (event) => {
          const form = event.target as HTMLFormElement;
          const formName = form.getAttribute('name') || form.id || 'Unknown Form';
          
          window.gtag('event', 'form_submit', {
            event_category: 'User Interaction',
            event_label: formName,
          });
        });
      }
    };

    trackInteractions();
  }, []);

  return null; // This component doesn't render anything
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

>>>>>>> ccdd793f83f956daa600fba7f9424f13ae1ffb73
export default Analytics;