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
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      cls: null,
      inp: null,
      fcp: null,
      lcp: null,
      ttfb: null,
    };

    const handleMetric = (metric: any) => {
      metrics[metric.name as keyof PerformanceMetrics] = metric.value;
      
      if (process.env.NODE_ENV === 'development' || showInProduction) {
        console.log(`Performance Metric - ${metric.name}:`, metric.value);
      }
    };

    // Measure Core Web Vitals
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [showInProduction]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;