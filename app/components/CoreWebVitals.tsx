import React, { useEffect, useCallback } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  const sendToAnalytics = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics or other analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', data.name, {
        event_category: 'Web Vitals',
        event_label: data.id,
        value: Math.round(data.name === 'CLS' ? data.value * 1000 : data.value),
        non_interaction: true,
      });
    }
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Import web-vitals dynamically to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, [sendToAnalytics]);

  return null; // This component doesn't render anything
};

export default CoreWebVitals;