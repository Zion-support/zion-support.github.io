'use client';

import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
    });
  }, []);

  // This component doesn't render anything visible
  // It just monitors performance metrics

  return null;
};

export default PerformanceMonitor;
