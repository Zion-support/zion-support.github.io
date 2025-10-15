import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  useEffect(() => {
    // Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, INP: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-semibold mb-2 text-cyan-400">Performance</div>
      <div className="space-y-1">
        {metrics.FCP && (
          <div>FCP: {Math.round(metrics.FCP)}ms</div>
        )}
        {metrics.LCP && (
          <div>LCP: {Math.round(metrics.LCP)}ms</div>
        )}
        {metrics.CLS && (
          <div>CLS: {metrics.CLS.toFixed(3)}</div>
        )}
        {metrics.INP && (
          <div>INP: {Math.round(metrics.INP)}ms</div>
        )}
        {metrics.TTFB && (
          <div>TTFB: {Math.round(metrics.TTFB)}ms</div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default PerformanceMonitor;