'use client';

import React, { useEffect, useState } from 'react';
import { Activity, Clock, Zap } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const updateMetrics = () => {
      // Get Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cls: metric.value }));
          });
          
          getFID((metric) => {
            setMetrics(prev => ({ ...prev, fid: metric.value }));
          });
          
          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, lcp: metric.value }));
          });
          
          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          });
        });
      }
    };

    // Update metrics after page load
    const timer = setTimeout(updateMetrics, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const hasMetrics = Object.values(metrics).some(value => value !== null);

  if (!hasMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-md rounded-lg p-3 text-white text-xs font-mono">
      <div className="flex items-center mb-2">
        <Activity className="w-4 h-4 mr-2" />
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-1">
        {metrics.lcp !== null && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.fid !== null && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
