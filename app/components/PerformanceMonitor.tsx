import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showInProduction = false }) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (!isProduction || showInProduction) {
      onCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
        console.log('CLS:', metric.value);
      });

      onINP((metric) => {
        setMetrics(prev => ({ ...prev, inp: metric.value }));
        console.log('INP:', metric.value);
      });

      onFCP((metric) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
        console.log('FCP:', metric.value);
      });

      onLCP((metric) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
        console.log('LCP:', metric.value);
      });

      onTTFB((metric) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
        console.log('TTFB:', metric.value);
      });
    }
  }, [showInProduction]);

  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction && !showInProduction) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(3) || 'N/A'}</div>
      <div>FCP: {metrics.fcp?.toFixed(0) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(0) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(0) || 'N/A'}ms</div>
    </div>
  );
};

export default PerformanceMonitor;
