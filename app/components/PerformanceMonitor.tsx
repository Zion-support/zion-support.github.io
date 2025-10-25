'use client';

import React, { useEffect, useState } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void}
}

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null});

  useEffect(() => {
    const handleMetric = (metric: { name: string; value: number; id: string }) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value}));

      // Send to analytics service (replace with your analytics endpoint))
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
        (window as unknown as { gtag: Function }).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true})}
    };

    // Monitor Core Web Vitals
    onCLS(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Monitor resource loading
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation && process.env.NODE_ENV === 'development') {
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart)}
      })}

    return () => {
      // Cleanup function
    }}, []);

  return null};

export default PerformanceMonitor;
