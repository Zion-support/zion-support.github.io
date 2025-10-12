'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    CLS: 0,
    INP: 0,
    FCP: 0,
    LCP: 0,
    TTFB: 0,
  });

  useEffect(() => {
    const handleCLS = (metric: any) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    };

    const handleINP = (metric: any) => {
      setMetrics(prev => ({ ...prev, INP: metric.value }));
    };

    const handleFCP = (metric: any) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    };

    const handleLCP = (metric: any) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    };

    const handleTTFB = (metric: any) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    };

    onCLS(handleCLS);
    onINP(handleINP);
    onFCP(handleFCP);
    onLCP(handleLCP);
    onTTFB(handleTTFB);

    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;
