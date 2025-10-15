import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const updateMetric = (name: string, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
      
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(name === 'CLS' ? value * 1000 : value),
          non_interaction: true,
        });
      }
    };

    // Use dynamic import for web-vitals to avoid build issues
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => updateMetric('CLS', metric.value));
      onFID((metric) => updateMetric('FID', metric.value));
      onFCP((metric) => updateMetric('FCP', metric.value));
      onLCP((metric) => updateMetric('LCP', metric.value));
      onTTFB((metric) => updateMetric('TTFB', metric.value));
    }).catch(() => {
      // Fallback if web-vitals fails to load
      console.log('Web Vitals not available');
    });
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <h4 className="font-bold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>CLS: {metrics.CLS?.toFixed(3) || 'N/A'}</div>
        <div>FID: {metrics.FID?.toFixed(0) || 'N/A'}ms</div>
        <div>FCP: {metrics.FCP?.toFixed(0) || 'N/A'}ms</div>
        <div>LCP: {metrics.LCP?.toFixed(0) || 'N/A'}ms</div>
        <div>TTFB: {metrics.TTFB?.toFixed(0) || 'N/A'}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;