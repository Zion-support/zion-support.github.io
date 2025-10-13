import React, { useCallback } from 'react';

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
        value: Math.round(data.name === 'CLS' ? data.value * 1000 : data.value),
        event_label: data.id,
        non_interaction: true,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', data);
    }
  }, []);

  // This component doesn't render anything, it just provides the callback
  return null;
};

export default CoreWebVitals;