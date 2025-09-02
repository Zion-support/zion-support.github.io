<<<<<<< HEAD
{ useEffect } from
  'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from
  'web-vitals';''
  'interface WebVitalsMetric {name: string;'
=======
import { useEffect } from 'react'
import  { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals''interface WebVitalsMetric {'
  name: string
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  value: number;
  delta: number;
  id: string;
}

const sendToAnalytics = (metric: WebVitalsMetric) => {;
  // Send to your analytics service
<<<<<<< HEAD
  if (typeof window !==, undefined
  ' && 'gtag
  ' in window) {'    (window as any).gtag(
  'event', metric.name, {
  '      event_category: 'Web Vitals, event_label: metric.id,'      value: Math.round(metric.name ==='
  'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,
, });'  }'
  
  // Log to console in development
  if (process.env.NODE_ENV ===
  'development') {
  '    console.log('Web Vital:  , metric);'  }'};
=======
  if (typeof window !== 'undefined' && 'gtag' in window) {'    (window as any).gtag('event', metric.name, {'      event_category: 'Web Vitals', event_label: metric.id,'      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,'    })'  }'
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {'    console.log('Web Vital: ', metric)'  }'}'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3

export const WebVitals = () => {;useEffect(() => {
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);

  return null;
};

export default WebVitals;