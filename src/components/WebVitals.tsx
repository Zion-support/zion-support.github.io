import { NextWebVitalsMetric } from 'next/app';

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  delta: number;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true
    });
  }

  // Send to custom analytics
  if (typeof window !== 'undefined' && 'dataLayer' in window) {
    (window as any).dataLayer.push({
      event: 'web_vitals',
      metric_name: metric.name,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_id: metric.id
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }
}

export default reportWebVitals;