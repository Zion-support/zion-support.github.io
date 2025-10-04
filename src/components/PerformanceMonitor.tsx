'use client';

import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  inp: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    inp: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_SHOW_PERFORMANCE === 'true'
    ) {
      setIsVisible(true);
    }

    // Dynamically import web-vitals to avoid build issues
    import('web-vitals')
      .then((webVitals) => {
        const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

        // Measure Core Web Vitals
        onCLS((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            cls: metric.value,
          }));
        });

        onFCP((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            fcp: metric.value,
          }));
        });

        onLCP((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            lcp: metric.value,
          }));
        });

        onTTFB((metric: { value: number }) => {
          setMetrics((prev: PerformanceMetrics) => ({
            ...prev,
            ttfb: metric.value,
          }));
        });

        // Try to use onINP if available (for newer versions)
        if (webVitals.onINP) {
          webVitals.onINP((metric: { value: number }) => {
            setMetrics((prev: PerformanceMetrics) => ({
              ...prev,
              inp: metric.value,
            }));
          });
        }
      })
      .catch((error) => {
        console.warn('Failed to load web-vitals:', error);
      });
  }, []);


  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Performance Monitor"
      >
        <Activity className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>
        {metrics.cls !== null && (
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        )}
        {metrics.inp !== null && (
          <div>INP: {metrics.inp.toFixed(2)}ms</div>
        )}
        {metrics.fcp !== null && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.lcp !== null && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.ttfb !== null && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;