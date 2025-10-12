'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = async () => {
      try {
        // Dynamic import to reduce bundle size
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          // Send to analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'CLS',
              metric_value: Math.round(metric.value * 1000) / 1000,
              metric_delta: Math.round(metric.delta * 1000) / 1000
            });
          }
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'FID',
              metric_value: Math.round(metric.value * 1000) / 1000,
              metric_delta: Math.round(metric.delta * 1000) / 1000
            });
          }
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'FCP',
              metric_value: Math.round(metric.value * 1000) / 1000,
              metric_delta: Math.round(metric.delta * 1000) / 1000
            });
          }
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'LCP',
              metric_value: Math.round(metric.value * 1000) / 1000,
              metric_delta: Math.round(metric.delta * 1000) / 1000
            });
          }
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'TTFB',
              metric_value: Math.round(metric.value * 1000) / 1000,
              metric_delta: Math.round(metric.delta * 1000) / 1000
            });
          }
        });
      } catch (error) {
        // Silently handle errors
        console.warn('Performance monitoring failed:', error);
      }
    };

    measurePerformance();
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development mode - show metrics
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 text-xs text-white z-50">
      <div className="font-semibold mb-2 text-cyan-400">Performance Metrics</div>
      <div className="space-y-1">
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Loading...'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}</div>
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Loading...'}</div>
      </div>
    </div>
  );
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}