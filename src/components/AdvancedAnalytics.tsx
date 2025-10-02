<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect } from 'react';';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
interface AdvancedAnalyticsProps {
enableConversionTracking?: boolean;,
enablePerformanceTracking?: boolean;,
enableErrorTracking?: boolean;
}

<<<<<<< HEAD
const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  enableConversionTracking = true
  enablePerformanceTracking = true
=======
const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({,
  enableConversionTracking = true,
  enablePerformanceTracking = true,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  enableErrorTracking = true
}) => {
  useEffect(() => {
    // Initialize Google Analytics 4
    const initGA4 = () => {
<<<<<<< HEAD
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {,
            custom_parameter_1: 'ai_solutions',
            custom_parameter_2: 'enterprise_tech'
          }
=======
      if (typeof window !== 'undefined' && window.gtag) {';
        window.gtag('config', 'G-XXXXXXXXXX', {';
          page_title: document.title,,
          page_location: window.location.href,,
          custom_map: {,
            custom_parameter_1: 'ai_solutions',';,
            custom_parameter_2: 'enterprise_tech',
          };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        });
      }
    };

    // Performance tracking
    const trackPerformance = () => {
<<<<<<< HEAD
      if (enablePerformanceTracking && 'performance' in window) {;
        window.addEventListener('load', () => {;
=======
      if (enablePerformanceTracking && 'performance' in window) {';
        window.addEventListener('load', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;';
            const metrics = {
              page_load_time: perfData.loadEventEnd - perfData.loadEventStart,,
              dom_content_loaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,,
<<<<<<< HEAD
              first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,',
              first_contentful_paint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0',
=======
              first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,';,
              first_contentful_paint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
            };

            // Send to analytics
            if (window.gtag) {
<<<<<<< HEAD
              window.gtag('event', 'page_performance', {;
                event_category: 'Performance',',
                event_label: 'Page Load Metrics',',
=======
              window.gtag('event', 'page_performance', {';
                event_category: 'Performance',';,
                event_label: 'Page Load Metrics',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                custom_map: metrics,
              });
            }
          }, 0);
        });
      }
    };

    // Error tracking
    const trackErrors = () => {
      if (enableErrorTracking) {
<<<<<<< HEAD
        window.addEventListener('error', (event) => {;
          if (window.gtag) {
            window.gtag('event', 'exception', {;
              description: event.error?.message || 'Unknown error',',
              fatal: false,,
              event_category: 'Error Tracking});
          }
        });

        window.addEventListener('unhandledrejection', (event) => {;
          if (window.gtag) {
            window.gtag('event', 'exception', {;
              description: event.reason?.message || 'Unhandled promise rejection',',
              fatal: false,,
              event_category: 'Error Tracking});
=======
        window.addEventListener('error', (event) => {';
          if (window.gtag) {
            window.gtag('event', 'exception', {';
              description: event.error?.message || 'Unknown error',';,
              fatal: false,,
              event_category: 'Error Tracking',
            });
          }
        });

        window.addEventListener('unhandledrejection', (event) => {';
          if (window.gtag) {
            window.gtag('event', 'exception', {';
              description: event.reason?.message || 'Unhandled promise rejection',';,
              fatal: false,,
              event_category: 'Error Tracking',
            });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          }
        });
      }
    };

    // Conversion tracking setup
    const setupConversionTracking = () => {
      if (enableConversionTracking) {
        // Track form submissions
        const forms = document.querySelectorAll('form');';
        forms.forEach(form => {
<<<<<<< HEAD
          form.addEventListener('submit', () => {;
            if (window.gtag) {
              window.gtag('event', 'conversion', {;
                event_category: 'Lead Generation',',
                event_label: 'Contact Form Submission});
=======
          form.addEventListener('submit', () => {';
            if (window.gtag) {
              window.gtag('event', 'conversion', {';
                event_category: 'Lead Generation',';,
                event_label: 'Contact Form Submission',
              });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
            }
          });
        });

        // Track button clicks
        const ctaButtons = document.querySelectorAll('[data-cta]');';
        ctaButtons.forEach(button => {
<<<<<<< HEAD
          button.addEventListener('click', () => {;
            if (window.gtag) {
              window.gtag('event', 'click', {;
                event_category: 'CTA',',
                event_label: button.getAttribute('data-cta') || 'Unknown CTA});
=======
          button.addEventListener('click', () => {';
            if (window.gtag) {
              window.gtag('event', 'click', {';
                event_category: 'CTA',';,
                event_label: button.getAttribute('data-cta') || 'Unknown CTA',
              });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
            }
          });
        });
      }
    };

    // Initialize all tracking
    initGA4();
    trackPerformance();
    trackErrors();
    setupConversionTracking();

    // Cleanup
    return () => {
      // Remove event listeners if needed
    };
  }, [enableConversionTracking, enablePerformanceTracking, enableErrorTracking]);

<<<<<<< HEAD
  return null; // This component doesn't render anything;
=======
  return null; // This component doesn't render anything';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
<<<<<<< HEAD
    gtag: (...args: unknown[]) => void,
=======
    gtag: (...args: unknown[]) => void;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  }
}

export default AdvancedAnalytics;