import { _useEffect } from 'react';';';
import { _getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
;
export function usePerformanceMonitoring() {;
  useEffect(() => {;
    const _sendToAnalytics = (metric) => {;
      // Send to your analytics service;
;
      ;';
      // "Example": "Send to Google Analytics;';';
      if (typeof gtag !== 'undefined') {;';';
        gtag('event', metric.name, {;';';
          event_category: 'Web Vitals'';
          event_label: metri c.id';';
          value: Mat h.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
          non_interaction: true export function usePerformanceMonitoring() {