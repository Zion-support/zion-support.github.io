'use client';

import { useEffect } from 'react';
// Note: web-vitals functions are imported dynamically to avoid build issues

interface WebVitalsTrackerProps {
  onMetric?: (metric: unknown) => void;
}

export default function WebVitalsTracker({ onMetric }: WebVitalsTrackerProps) {
  useEffect(() => {
    const handleMetric = (metric: unknown) => {
      if (onMetric) {
        onMetric(metric);
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    };

    // Measure Core Web Vitals (imported dynamically)
    import('web-vitals').then((webVitals) => {
      if ('getCLS' in webVitals && typeof webVitals.getCLS === 'function') {
        (webVitals.getCLS as (callback: (metric: unknown) => void) => void)(handleMetric);
      }
      if ('getFID' in webVitals && typeof webVitals.getFID === 'function') {
        (webVitals.getFID as (callback: (metric: unknown) => void) => void)(handleMetric);
      }
      if ('getFCP' in webVitals && typeof webVitals.getFCP === 'function') {
        (webVitals.getFCP as (callback: (metric: unknown) => void) => void)(handleMetric);
      }
      if ('getLCP' in webVitals && typeof webVitals.getLCP === 'function') {
        (webVitals.getLCP as (callback: (metric: unknown) => void) => void)(handleMetric);
      }
      if ('getTTFB' in webVitals && typeof webVitals.getTTFB === 'function') {
        (webVitals.getTTFB as (callback: (metric: unknown) => void) => void)(handleMetric);
      }
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });
  }, [onMetric]);

  return null; // This component doesn't render anything
}