import React, { useEffect, useCallback } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const CoreWebVitals: React.FC = () => {
  const reportWebVitals = useCallback((data: WebVitalsData) => {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', data.name, {
        value: Math.round(data.value),
        event_category: 'Web Vitals',
        event_label: data.id,
        non_interaction: true,
      });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', data);
    }
  }, []);

  useEffect(() => {
    // Import web-vitals dynamically to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });
  }, [reportWebVitals]);

  return null;
};

export default CoreWebVitals;
