'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

const API_ENDPOINT = '/api/field-performance';

interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id: string;
  page: string;
  timestamp: number;
  connection?: any;
  deviceMemory?: number;
}

function stripQueryParams(url: string): string {
  try {
    const u = new URL(url, window.location.origin);
    return u.pathname + u.search; // keep path + query but no hash/fragment
  } catch {
    return url;
  }
}

function sendMetric(metric: Omit<Metric, 'page' | 'timestamp' | 'connection' | 'deviceMemory'>) {
  const data: Metric = {
    ...metric,
    page: stripQueryParams(window.location.pathname + window.location.search),
    timestamp: Date.now(),
    connection: (navigator as any).connection || undefined,
    deviceMemory: (navigator as any).deviceMemory || undefined,
  };

  // Use sendBeacon for reliability (fires even on page unload)
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  navigator.sendBeacon(API_ENDPOINT, blob);
}

export default function FieldPerformanceCollector() {
  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      sendMetric({
        name: 'CLS',
        value: metric.value,
        rating: metric.rating as 'good' | 'needs-improvement' | 'poor',
        delta: metric.delta,
        id: metric.id,
      });
    });

    onFCP((metric) => {
      sendMetric({
        name: 'FCP',
        value: metric.value,
        rating: metric.rating as 'good' | 'needs-improvement' | 'poor',
        delta: metric.delta,
        id: metric.id,
      });
    });

    onINP((metric) => {
      sendMetric({
        name: 'INP',
        value: metric.value,
        rating: metric.rating as 'good' | 'needs-improvement' | 'poor',
        delta: metric.delta,
        id: metric.id,
      });
    });

    onLCP((metric) => {
      sendMetric({
        name: 'LCP',
        value: metric.value,
        rating: metric.rating as 'good' | 'needs-improvement' | 'poor',
        delta: metric.delta,
        id: metric.id,
      });
    });

    onTTFB((metric) => {
      sendMetric({
        name: 'TTFB',
        value: metric.value,
        rating: metric.rating as 'good' | 'needs-improvement' | 'poor',
        delta: metric.delta,
        id: metric.id,
      });
    });
  }, []);

  // This component renders nothing
  return null;
}
