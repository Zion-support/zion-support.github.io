<<<<<<< HEAD
import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    const reportWebVitals = (data: WebVitalsData) => {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: data.name,
          metric_value: Math.round(data.value),
          metric_delta: Math.round(data.delta),
          metric_id: data.id,
          metric_navigation_type: data.navigationType,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vitals:', data);
      }
    };

    // Track Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, []);

  return null;
};

export default CoreWebVitals;
=======
import React from "react";

const CoreWebVitals = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">CoreWebVitals</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default CoreWebVitals;
>>>>>>> origin/main
