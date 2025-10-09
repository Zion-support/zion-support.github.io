import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  isVisible: boolean;
  onClose: () => void;
  enableConsoleLogging?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  isVisible,
  onClose,
  enableConsoleLogging = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [, setPerformanceScore] = useState(0);

  useEffect(() => {
    const updateMetrics = () => {
      const currentMetrics: PerformanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
        memoryUsage: 0,
      };

      // Get Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry;
            currentMetrics.lcp = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstInput = entries[0] as PerformanceEventTiming;
            currentMetrics.fid = firstInput.processingStart - firstInput.startTime;
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            currentMetrics.cls = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // FCP
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              currentMetrics.fcp = fcpEntry.startTime;
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // TTFB
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            currentMetrics.ttfb = navigation.responseStart - navigation.requestStart;
          }

        } catch (error) {
          console.warn('Performance monitoring error:', error);
        }
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        currentMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      setMetrics(currentMetrics);

      // Calculate performance score
      let score = 100;
      if (currentMetrics.lcp && currentMetrics.lcp > 2500) score -= 20;
      if (currentMetrics.fid && currentMetrics.fid > 100) score -= 20;
      if (currentMetrics.cls && currentMetrics.cls > 0.1) score -= 20;
      if (currentMetrics.fcp && currentMetrics.fcp > 1800) score -= 20;
      if (currentMetrics.ttfb && currentMetrics.ttfb > 600) score -= 20;

      setPerformanceScore(Math.max(0, score));
    };

    if (isVisible) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900 text-white p-4 rounded-lg shadow-xl z-50 min-w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-400">LCP</div>
            <div className="font-mono">{formatMetric(metrics.lcp)}</div>
          </div>
          <div>
            <div className="text-gray-400">FID</div>
            <div className="font-mono">{formatMetric(metrics.fid)}</div>
          </div>
          <div>
            <div className="text-gray-400">CLS</div>
            <div className="font-mono">{formatMetric(metrics.cls, '')}</div>
          </div>
          <div>
            <div className="text-gray-400">FCP</div>
            <div className="font-mono">{formatMetric(metrics.fcp)}</div>
          </div>
          <div>
            <div className="text-gray-400">TTFB</div>
            <div className="font-mono">{formatMetric(metrics.ttfb)}</div>
          </div>
          <div>
            <div className="text-gray-400">Memory</div>
            <div className="font-mono">{formatMetric(metrics.memoryUsage, 'MB')}</div>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-700">
          <div className="text-sm text-gray-400">Performance Score</div>
          <div className={`text-lg font-bold ${getScoreColor(100)}`}>
            {100}/100
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;