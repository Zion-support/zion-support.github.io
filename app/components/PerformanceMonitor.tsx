import React, { useEffect, useState } from 'react';
import { Activity, Zap } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug mode is enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Track Core Web Vitals
    const trackMetric = (name: string, value: number) => {
      setMetrics(prev => ({
        ...prev,
        [name]: value
      }));
    };

    // Track FCP
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          trackMetric('fcp', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Track LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackMetric('lcp', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            trackMetric('cls', clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Track TTFB
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigation = entries[0] as PerformanceNavigationTiming;
        if (navigation) {
          trackMetric('ttfb', navigation.responseStart - navigation.requestStart);
          trackMetric('loadTime', navigation.loadEventEnd - navigation.fetchStart);
        }
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Track memory usage
      const updateMemoryUsage = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          trackMetric('memoryUsage', memory.usedJSHeapSize / 1024 / 1024); // MB
        }
      };

      updateMemoryUsage();
      const memoryInterval = setInterval(updateMemoryUsage, 5000);

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
        clearInterval(memoryInterval);
      };
    }
    
    return undefined;
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono z-50 border border-white/20 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Activity className="w-4 h-4 mr-2 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {formatValue(metrics.fcp)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {formatValue(metrics.lcp)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {formatValue(metrics.cls, '')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 600, poor: 1500 })}>
            {formatValue(metrics.ttfb)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {formatValue(metrics.loadTime)}
          </span>
        </div>
        
        {metrics.memoryUsage && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={getScoreColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {formatValue(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-white/20 text-xs text-gray-400">
        <div className="flex items-center">
          <Zap className="w-3 h-3 mr-1" />
          <span>Core Web Vitals</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;