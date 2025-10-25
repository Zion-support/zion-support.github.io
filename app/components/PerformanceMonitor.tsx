'use client';

import React, { useEffect, useState } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;
  }
}

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Entry:', entry.name, (entry as PerformanceEntry & { value?: number }).value || 'N/A')
          }
        }
      })

    const handleMetric = (metric: { name: string; value: number; id: string }) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value,
      }));

      // Send to analytics service (replace with your analytics endpoint)
