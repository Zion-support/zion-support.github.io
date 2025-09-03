import React, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface WebVitalsMetric {
<<<<<<< HEAD
  name: string;
  value: number;
  delta: number;
  id: string;
=======
<<<<<<< HEAD
{ useEffect } from;
  'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB  } from 'lucide-react'';interface WebVitalsMetric {'
=======
>>>>>>> main
  name: string;
  value: number;
  delt,
    a: number;
  i,
    d: string;
>>>>>>> main
}

const sendToAnalytics = (metric: WebVitalsMetric) => {
<<<<<<< HEAD
  // Send to your analytics service'
  if (typeof window !== 'undefined' && 'gtag' in window) {'
    (window as any).gtag('event', metric.name, {'
=======
  // Send to your analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
<<<<<<< HEAD
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital: ', metric);
  }
};
=======
<<<<<<< HEAD
      event_category: 'Web Vitals', event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,
    })}
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital: ', metric)}
}
=======
>>>>>>> main
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
<<<<<<< HEAD
  
<<<<<<< HEAD
  // Log to console in development'
  if (process.env.NODE_ENV === 'development') {'
    console.log('Web Vital:', metric);
=======
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    
>>>>>>> main
  }
};
>>>>>>> main
>>>>>>> main

export const WebVitals = () => {
=======
};

const WebVitals: React.FC = () => {
>>>>>>> main
  useEffect(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
const sendToAnalytics = (metric: WebVitalsMetric) => {
  // Send to your analytics service;
  if (typeof window !==, undefined;
  ' && 'gtag;
  ' in window) {'    (window as any).gtag(
  'event', metric.name, {
  '      event_category: 'Web Vitals, event_label: metric.id,'      value: Math.round(metric.name ===;'
  'CLS' ? metric.value * 1000 : metric.value), non_interaction: true,
})'  }'
  // Log to console in development;
  if (process.env.NODE_ENV ===;
  'development') {
  '    console.log('Web Vital:  , metric)'  }'}
export const WebVitals = () => {useEffect(() => {
=======
>>>>>>> main
>>>>>>> main
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);

  return null;
<<<<<<< HEAD
};

export default WebVitals;
=======
<<<<<<< HEAD
};
=======
};

export default WebVitals;
>>>>>>> main
>>>>>>> main
