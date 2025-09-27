import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics service
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
      non_interaction: true, // avoids affecting bounce rate
      metric_id: metric.id, // Google Analytics 4 uses 'metric_id'
      metric_value: metric.value,
      metric_delta: metric.delta,
      navigation_type: metric.navigationType,
    });
  }
  console.log('[Web Vitals]', metric);
}

// This component is primarily for Next.js's custom App component to hook into Web Vitals reporting.
// It doesn't render anything itself.
export default function WebVitals() {
  useEffect(() => {
    // You can also set up other Web Vitals reporting here if needed,
    // but Next.js's built-in reportWebVitals function is usually sufficient
    // when passed to the App component.
  }, []);
  return null;
}