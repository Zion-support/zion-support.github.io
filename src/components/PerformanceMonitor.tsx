import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Dynamically import web-vitals to avoid build issues
    import('web-vitals').then((webVitals) => {
      const { onCLS, onFCP, onLCP, onTTFB } = webVitals;
      
      // Measure Core Web Vitals
      onCLS((metric: any) => {
        setMetrics((prev: PerformanceMetrics) => ({ ...prev, cls: metric.value }));
      });

      onFCP((metric: any) => {
        setMetrics((prev: PerformanceMetrics) => ({ ...prev, fcp: metric.value }));
      });

      onLCP((metric: any) => {
        setMetrics((prev: PerformanceMetrics) => ({ ...prev, lcp: metric.value }));
      });

      onTTFB((metric: any) => {
        setMetrics((prev: PerformanceMetrics) => ({ ...prev, ttfb: metric.value }));
      });

      // Try to use onINP if available (for newer versions)
      if (webVitals.onINP) {
        webVitals.onINP((metric: any) => {
          setMetrics((prev: PerformanceMetrics) => ({ ...prev, inp: metric.value }));
        });
      }
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(2) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(2) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(2) || 'N/A'}ms</div>
    </div>
  );
};

export default PerformanceMonitor;