import { NextWebVitalsMetric } from 'next/app';

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  delta: number;
  entries: PerformanceEntry[];
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}