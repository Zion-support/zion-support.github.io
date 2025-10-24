'use client';

import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [warnings, setWarnings] = useState<string[]>([]);

  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if (typeof window !== 'undefined') {
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          if (metric.value > 0.1) {
            setWarnings(prev => [...prev, 'CLS is above recommended threshold']);
          }
        });
        
        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          if (metric.value > 100) {
            setWarnings(prev => [...prev, 'FID is above recommended threshold']);
          }
        });
        
        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          if (metric.value > 1800) {
            setWarnings(prev => [...prev, 'FCP is above recommended threshold']);
          }
        });
        
        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          if (metric.value > 2500) {
            setWarnings(prev => [...prev, 'LCP is above recommended threshold']);
          }
        });
        
        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          if (metric.value > 600) {
            setWarnings(prev => [...prev, 'TTFB is above recommended threshold']);
          }
        });
      }
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Monitor page load time
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
        });

        // Monitor resource loading
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              console.log('Resource loaded:', entry.name, entry.duration);
            }
          });
        });

        observer.observe({ entryTypes: ['resource'] });
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorPerformance();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">Performance Monitor</h3>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-600' : 'text-green-600'}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-600' : 'text-green-600'}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid && metrics.fid > 100 ? 'text-red-600' : 'text-green-600'}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-600' : 'text-green-600'}>
            {metrics.cls ? metrics.cls.toFixed(3) : '...'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-600' : 'text-green-600'}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}
          </span>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="mt-2 p-2 bg-red-50 rounded text-xs">
          <div className="font-semibold text-red-800 mb-1">Warnings:</div>
          {warnings.map((warning, index) => (
            <div key={index} className="text-red-700">• {warning}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;