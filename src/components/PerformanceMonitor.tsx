import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
}

const PerformanceMonitor: React.FC<{ show?: boolean }> = ({ show = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null
  });

  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (!isVisible) return;

    const updateMetrics = () => {
      // Get performance metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      
      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcp = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;
      
      // Get FID (simulated)
      let fid = null;
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fidEntry = fidEntries[0] as PerformanceEntry & { processingStart?: number };
        fid = (fidEntry.processingStart || 0) - fidEntry.startTime;
      }
      
      // Get CLS (simulated)
      let cls = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      clsEntries.forEach(entry => {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
          cls += layoutShiftEntry.value;
        }
      });

      setMetrics({
        fcp: fcpEntry ? fcpEntry.startTime : null,
        lcp,
        fid,
        cls,
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-zion-slate-800 hover:bg-zion-slate-700 text-white p-2 rounded-lg shadow-lg transition-colors z-50"
        aria-label="Show performance monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-zion-slate-800 text-white p-4 rounded-lg shadow-lg z-50 min-w-[200px] border border-zion-slate-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zion-cyan">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-zion-blue-light" />
            <span className="text-zion-slate-light">FCP:</span>
          </div>
          <span className="text-white">{metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Database className="w-3 h-3 text-zion-purple-light" />
            <span className="text-zion-slate-light">LCP:</span>
          </div>
          <span className="text-white">{metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-zion-cyan" />
            <span className="text-zion-slate-light">FID:</span>
          </div>
          <span className="text-white">{metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-zion-blue" />
            <span className="text-zion-slate-light">CLS:</span>
          </div>
          <span className="text-white">{metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-zion-blue-light" />
            <span className="text-zion-slate-light">TTFB:</span>
          </div>
          <span className="text-white">{metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Database className="w-3 h-3 text-zion-purple-light" />
            <span className="text-zion-slate-light">Load Time:</span>
          </div>
          <span className="text-white">{metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;