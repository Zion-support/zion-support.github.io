import React, { useState, useEffect } from 'react';
import { onFCP, onLCP, onFID, onCLS, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
  loadTime: number | null;
}

interface AdvancedPerformanceMonitorProps {
  showDetails?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
    loadTime: null,
  });

  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Report metrics to analytics
    const reportMetric = (name: string, value: number) => {
      // Analytics reporting would go here
      console.log(`Performance Metric - ${name}: ${value}ms`);
    };

    const measureWebVitals = () => {
      onFCP((metric: any) => {
        setMetrics(prev => ({ ...prev, fcp: metric.value }));
        reportMetric('FCP', metric.value);
      });

      onLCP((metric: any) => {
        setMetrics(prev => ({ ...prev, lcp: metric.value }));
        reportMetric('LCP', metric.value);
      });

      onFID((metric: any) => {
        setMetrics(prev => ({ ...prev, fid: metric.value }));
        reportMetric('FID', metric.value);
      });

      onCLS((metric: any) => {
        setMetrics(prev => ({ ...prev, cls: metric.value }));
        reportMetric('CLS', metric.value);
      });

      onTTFB((metric: any) => {
        setMetrics(prev => ({ ...prev, ttfb: metric.value }));
        reportMetric('TTFB', metric.value);
      });
    };

    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize / 1024 / 1024 }));
      }
    };

    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
        reportMetric('Load Time', loadTime);
      });
    };

    measureWebVitals();
    measureMemory();
    measureLoadTime();

    // Start recording after component mount
    setIsRecording(true);
  }, []);

  const getMetricColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMetricStatus = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'Unknown';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  if (!showDetails) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
        <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-green-400' : 'bg-gray-400'}`}></div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">First Contentful Paint:</span>
          <span className={getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Largest Contentful Paint:</span>
          <span className={getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">First Input Delay:</span>
          <span className={getMetricColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Cumulative Layout Shift:</span>
          <span className={getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Time to First Byte:</span>
          <span className={getMetricColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Loading...'}
          </span>
        </div>
        
        {metrics.memory && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Memory Usage:</span>
            <span className="text-blue-400">
              {metrics.memory.toFixed(1)}MB
            </span>
          </div>
        )}
        
        {metrics.loadTime && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Load Time:</span>
            <span className="text-purple-400">
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Status: {isRecording ? 'Recording' : 'Stopped'}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
