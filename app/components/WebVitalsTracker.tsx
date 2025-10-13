import React, { useEffect } from 'react';

interface WebVitalsTrackerProps {
  enabled?: boolean;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const trackWebVitals = async () => {
      try {
        // Dynamic import to avoid bundling in production if not needed
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Track Core Web Vitals
        getCLS((metric) => {
          console.log('CLS:', metric);
          // Send to analytics service
          if (process.env.NODE_ENV === 'production') {
            // gtag('event', 'web_vitals', {
            //   metric_name: 'CLS',
            //   metric_value: metric.value,
            //   metric_delta: metric.delta
            // });
          }
        });

        getFID((metric) => {
          console.log('FID:', metric);
          if (process.env.NODE_ENV === 'production') {
            // gtag('event', 'web_vitals', {
            //   metric_name: 'FID',
            //   metric_value: metric.value,
            //   metric_delta: metric.delta
            // });
          }
        });

        getFCP((metric) => {
          console.log('FCP:', metric);
          if (process.env.NODE_ENV === 'production') {
            // gtag('event', 'web_vitals', {
            //   metric_name: 'FCP',
            //   metric_value: metric.value,
            //   metric_delta: metric.delta
            // });
          }
        });

        getLCP((metric) => {
          console.log('LCP:', metric);
          if (process.env.NODE_ENV === 'production') {
            // gtag('event', 'web_vitals', {
            //   metric_name: 'LCP',
            //   metric_value: metric.value,
            //   metric_delta: metric.delta
            // });
          }
        });

        getTTFB((metric) => {
          console.log('TTFB:', metric);
          if (process.env.NODE_ENV === 'production') {
            // gtag('event', 'web_vitals', {
            //   metric_name: 'TTFB',
            //   metric_value: metric.value,
            //   metric_delta: metric.delta
            // });
          }
        });

      } catch (error) {
        console.warn('Web Vitals tracking failed:', error);
      }
    };

    // Track when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackWebVitals);
    } else {
      trackWebVitals();
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', trackWebVitals);
    };
  }, [enabled]);

  return null; // This component doesn't render anything
};

export default WebVitalsTracker;
