import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackCoreWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Track and log Core Web Vitals
        getCLS((metric) => {
          console.log('Core Web Vital - CLS:', metric);
          // CLS should be < 0.1 for good user experience
          if (metric.value > 0.1) {
            console.warn('CLS is above recommended threshold:', metric.value);
          }
        });

        getFID((metric) => {
          console.log('Core Web Vital - FID:', metric);
          // FID should be < 100ms for good user experience
          if (metric.value > 100) {
            console.warn('FID is above recommended threshold:', metric.value);
          }
        });

        getFCP((metric) => {
          console.log('Core Web Vital - FCP:', metric);
          // FCP should be < 1.8s for good user experience
          if (metric.value > 1800) {
            console.warn('FCP is above recommended threshold:', metric.value);
          }
        });

        getLCP((metric) => {
          console.log('Core Web Vital - LCP:', metric);
          // LCP should be < 2.5s for good user experience
          if (metric.value > 2500) {
            console.warn('LCP is above recommended threshold:', metric.value);
          }
        });

        getTTFB((metric) => {
          console.log('Core Web Vital - TTFB:', metric);
          // TTFB should be < 600ms for good user experience
          if (metric.value > 600) {
            console.warn('TTFB is above recommended threshold:', metric.value);
          }
        });

      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    // Track when page is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', trackCoreWebVitals);
    } else {
      trackCoreWebVitals();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', trackCoreWebVitals);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CoreWebVitals;
