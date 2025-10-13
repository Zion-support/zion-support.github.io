import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  onMetricsUpdate,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null,
  });

  const [isVisible, setIsVisible] = useState(showDetails);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Web Vitals measurement
    const measureWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB (Time to First Byte)
      const ttfbEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (ttfbEntry) {
        setMetrics(prev => ({ ...prev, ttfb: ttfbEntry.responseStart - ttfbEntry.requestStart }));
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    };

    // Initial measurements
    measureLoadTime();
    measureMemoryUsage();

    // Set up Web Vitals measurement
    const cleanup = measureWebVitals();

    // Update metrics periodically
    const interval = setInterval(() => {
      measureMemoryUsage();
    }, 5000);

    // Cleanup on unmount
    return () => {
      cleanup?.();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  const getPerformanceScore = () => {
    let score = 0;
    let count = 0;

    if (metrics.lcp !== null) {
      score += metrics.lcp < 2500 ? 1 : metrics.lcp < 4000 ? 0.5 : 0;
      count++;
    }
    if (metrics.fid !== null) {
      score += metrics.fid < 100 ? 1 : metrics.fid < 300 ? 0.5 : 0;
      count++;
    }
    if (metrics.cls !== null) {
      score += metrics.cls < 0.1 ? 1 : metrics.cls < 0.25 ? 0.5 : 0;
      count++;
    }

    return count > 0 ? Math.round((score / count) * 100) : 0;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  if (!isVisible) return null;

  const performanceScore = getPerformanceScore();

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-xs max-w-xs z-50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Score:</span>
          <span className={`font-semibold ${getScoreColor(performanceScore)}`}>
            {performanceScore}/100
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center space-x-1">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span className="text-gray-300">LCP:</span>
            <span className="text-white">{formatMetric(metrics.lcp)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3 text-blue-400" />
            <span className="text-gray-300">FID:</span>
            <span className="text-white">{formatMetric(metrics.fid)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-gray-300">CLS:</span>
            <span className="text-white">{formatMetric(metrics.cls, '')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Activity className="w-3 h-3 text-purple-400" />
            <span className="text-gray-300">FCP:</span>
            <span className="text-white">{formatMetric(metrics.fcp)}</span>
          </div>
        </div>

        {metrics.loadTime && (
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Load Time:</span>
              <span className="text-white">{formatMetric(metrics.loadTime)}</span>
            </div>
          </div>
        )}

        {metrics.memoryUsage && (
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className="text-white">{(metrics.memoryUsage * 100).toFixed(1)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;