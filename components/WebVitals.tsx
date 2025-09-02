import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

const sendToAnalytics = (metric: Metric) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? (metric.value as number) * 1000 : (metric.value as number)),
      non_interaction: true,
    });
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital: ', metric);
  }
};

export const WebVitals = () => {
  useEffect(() => {
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);
  return null;
};

export default WebVitals;