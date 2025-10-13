import React, { useCallback, useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  const reportWebVitals = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', data.name, {
        event_category: 'Web Vitals',
        event_label: data.id,
        value: Math.round(data.name === 'CLS' ? data.value * 1000 : data.value),
        non_interaction: true,
      });
    }
    
    // Log to console for development
    console.log('Web Vitals:', data);
  }, []);

  useEffect(() => {
    // Import and initialize web vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, [reportWebVitals]);

  return null;
};

export default CoreWebVitals;