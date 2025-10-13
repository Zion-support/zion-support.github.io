import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage?: number;
  loadTime: number;
}

interface AdvancedPerformanceMonitorProps {
  showDetails?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // This would integrate with web-vitals library
      // For now, we'll simulate the metrics
      const vitals = {
        fcp: Math.random() * 2000 + 1000,
        lcp: Math.random() * 3000 + 2000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.1,
        ttfb: Math.random() * 500 + 200,
        loadTime: performance.now()
      };
      
      setMetrics(prev => ({ ...prev, ...vitals }));
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Report metrics to analytics
    const reportMetric = () => {
      // Analytics reporting would go here
      console.log('Performance metrics:', metrics);
    };

    measureWebVitals();
    measureMemory();
    measureLoadTime();

    // Set up performance observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          measureLoadTime();
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const startRecording = useCallback(() => {
    setIsRecording(true);
    // Start performance recording logic
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    // Stop performance recording logic
  }, []);

  if (!showDetails) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`px-2 py-1 rounded text-xs ${
            isRecording ? 'bg-red-600' : 'bg-green-600'
          }`}
        >
          {isRecording ? 'Stop' : 'Start'}
        </button>
      </div>
      
      {metrics && (
        <div className="space-y-1 text-xs">
          <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
          <div>FID: {metrics.fid.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls.toFixed(3)}</div>
          <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
          {metrics.memoryUsage && (
            <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
          )}
          <div>Load Time: {metrics.loadTime.toFixed(0)}ms</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
