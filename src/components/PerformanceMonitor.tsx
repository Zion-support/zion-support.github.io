import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Monitor Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Get Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Show metrics after 3 seconds
      setTimeout(() => setIsVisible(true), 3000);

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  const getScore = (value: number, type: keyof PerformanceMetrics): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    };

    if (value <= thresholds[type].good) return 'good';
    if (value <= thresholds[type].poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (!metrics || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-zion-slate-dark/90 backdrop-blur-sm border border-zion-slate-light/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Performance Metrics</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getScore(metrics.fcp, 'fcp'))}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getScore(metrics.lcp, 'lcp'))}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(getScore(metrics.fid, 'fid'))}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(getScore(metrics.cls, 'cls'))}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(getScore(metrics.ttfb, 'ttfb'))}>
            {metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-zion-slate-light/20">
        <div className="flex justify-between text-xs">
          <span>Overall:</span>
          <span className="font-semibold text-zion-cyan">
            {(() => {
              const scores = Object.keys(metrics).map(key => 
                getScore(metrics[key as keyof PerformanceMetrics], key as keyof PerformanceMetrics)
              );
              const goodCount = scores.filter(s => s === 'good').length;
              const total = scores.length;
              return `${Math.round((goodCount / total) * 100)}%`;
            })()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
