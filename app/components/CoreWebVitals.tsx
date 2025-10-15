import React, { useEffect, useState } from 'react';
import { Activity, Clock, Zap } from 'lucide-react';

interface WebVitals {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const CoreWebVitals: React.FC = () => {
  const [vitals, setVitals] = useState<WebVitals>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Measure Core Web Vitals
    const measureVitals = () => {
      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setVitals(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              setVitals(prev => ({ ...prev, cls: clsValue }));
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // FCP (First Contentful Paint)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setVitals(prev => ({ ...prev, fcp: entry.startTime }));
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // TTFB (Time to First Byte)
      if (performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
        setVitals(prev => ({ ...prev, ttfb }));
      }
    };

    measureVitals();
  }, []);

  const getVitalStatus = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'unknown';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Activity className="w-5 h-5 mr-2" />
        Core Web Vitals
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">LCP</span>
          <span className={`text-sm ${getStatusColor(getVitalStatus(vitals.lcp, { good: 2500, poor: 4000 }))}`}>
            {vitals.lcp ? `${vitals.lcp.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">FID</span>
          <span className={`text-sm ${getStatusColor(getVitalStatus(vitals.fid, { good: 100, poor: 300 }))}`}>
            {vitals.fid ? `${vitals.fid.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">CLS</span>
          <span className={`text-sm ${getStatusColor(getVitalStatus(vitals.cls, { good: 0.1, poor: 0.25 }))}`}>
            {vitals.cls ? vitals.cls.toFixed(3) : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">FCP</span>
          <span className={`text-sm ${getStatusColor(getVitalStatus(vitals.fcp, { good: 1800, poor: 3000 }))}`}>
            {vitals.fcp ? `${vitals.fcp.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">TTFB</span>
          <span className={`text-sm ${getStatusColor(getVitalStatus(vitals.ttfb, { good: 800, poor: 1800 }))}`}>
            {vitals.ttfb ? `${vitals.ttfb.toFixed(0)}ms` : 'Measuring...'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoreWebVitals;
