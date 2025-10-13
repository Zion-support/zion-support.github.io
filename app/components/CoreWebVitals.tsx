import React, { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Measure Core Web Vitals
        getCLS((data) => {
          console.log('CLS:', data);
          // Send to analytics if available
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(data.value * 1000),
              non_interaction: true,
            });
          }
        });

        getFID((data) => {
          console.log('FID:', data);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(data.value),
              non_interaction: true,
            });
          }
        });

        getFCP((data) => {
          console.log('FCP:', data);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FCP',
              value: Math.round(data.value),
              non_interaction: true,
            });
          }
        });

        getLCP((data) => {
          console.log('LCP:', data);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(data.value),
              non_interaction: true,
            });
          }
        });

        getTTFB((data) => {
          console.log('TTFB:', data);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'TTFB',
              value: Math.round(data.value),
              non_interaction: true,
            });
          }
        });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    loadWebVitals();
  }, []);

  return null;
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default CoreWebVitals;
