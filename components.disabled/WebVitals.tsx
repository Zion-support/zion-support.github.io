import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const sendToAnalytics = (metric: WebVitalsMetric) => {
  // Send to your analytics service
  console.log('Web Vitals:', metric);
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

const WebVitals: React.FC = () => {
  useEffect(() => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);

  return null;
};

export default WebVitals;