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

  const analytics = useAnalytics();

  useEffect(() => {
    // Monitor Core Web Vitals
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      analytics.trackEvent('web_vitals', {
        metric: 'LCP',
        value: metric.value
      });
    });

    onFID((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
      analytics.trackEvent('web_vitals', {
        metric: 'FID',
        value: metric.value
      });
    });

    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      analytics.trackEvent('web_vitals', {
        metric: 'CLS',
        value: metric.value
      });
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      analytics.trackEvent('web_vitals', {
        metric: 'FCP',
        value: metric.value
      });
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      analytics.trackEvent('web_vitals', {
        metric: 'TTFB',
        value: metric.value
      });
    });
  }, [analytics]);

  // Log performance issues
  useEffect(() => {
    if (metrics.lcp && metrics.lcp > 2500) {
      console.warn('Poor LCP:', metrics.lcp);
    }
    if (metrics.fid && metrics.fid > 100) {
      console.warn('Poor FID:', metrics.fid);
    }
    if (metrics.cls && metrics.cls > 0.1) {
      console.warn('Poor CLS:', metrics.cls);
    }
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;
