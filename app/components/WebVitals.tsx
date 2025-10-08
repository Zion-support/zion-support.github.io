import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { useAnalytics } from './AnalyticsProvider';

interface WebVitalsProps {
  enabled?: boolean;
}

/**
 * Web Vitals Component
 * Monitors and reports Core Web Vitals metrics
 */
const WebVitals: React.FC<WebVitalsProps> = ({ enabled = true }) => {
  const { trackPerformance } = useAnalytics();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Track Cumulative Layout Shift (CLS)
    onCLS((metric) => {
      trackPerformance('CLS', metric.value);
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('CLS:', metric);
      }
    });

    // Track Interaction to Next Paint (INP) - replaces FID
    onINP((metric) => {
      trackPerformance('INP', metric.value);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('INP:', metric);
      }
    });

    // Track First Contentful Paint (FCP)
    onFCP((metric) => {
      trackPerformance('FCP', metric.value);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('FCP:', metric);
      }
    });

    // Track Largest Contentful Paint (LCP)
    onLCP((metric) => {
      trackPerformance('LCP', metric.value);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('LCP:', metric);
      }
    });

    // Track Time to First Byte (TTFB)
    onTTFB((metric) => {
      trackPerformance('TTFB', metric.value);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('TTFB:', metric);
      }
    });

  }, [enabled, trackPerformance]);

  return null;
};

export default WebVitals;