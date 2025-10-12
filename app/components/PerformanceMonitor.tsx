'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { useAnalytics } from './EnhancedAnalytics';

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
    ttfb: null
  });

  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Track LCP (Largest Contentful Paint)
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      trackEvent('performance_metric', {
        metric: 'lcp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track FID (First Input Delay)
    onINP((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
      trackEvent('performance_metric', {
        metric: 'fid',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track CLS (Cumulative Layout Shift)
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      trackEvent('performance_metric', {
        metric: 'cls',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track FCP (First Contentful Paint)
    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      trackEvent('performance_metric', {
        metric: 'fcp',
        value: metric.value,
        rating: metric.rating
      });
    });

    // Track TTFB (Time to First Byte)
    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      trackEvent('performance_metric', {
        metric: 'ttfb',
        value: metric.value,
        rating: metric.rating
      });
    });
  }, [trackEvent]);

  // Log performance warnings
  useEffect(() => {
    if (metrics.lcp && metrics.lcp > 4000) {
      console.warn('Poor LCP:', metrics.lcp);
    }
    if (metrics.fid && metrics.fid > 300) {
      console.warn('Poor FID:', metrics.fid);
    }
    if (metrics.cls && metrics.cls > 0.25) {
      console.warn('Poor CLS:', metrics.cls);
    }
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;