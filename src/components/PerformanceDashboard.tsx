import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';
import { usePerformance } from '../hooks/usePerformance';
import { getMemoryUsage } from '../utils/performance';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  metrics: Record<string, number>;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    memory: { used: 0, total: 0, percentage: 0 },
    metrics: {},
  });
  const [isVisible, setIsVisible] = useState(false);
  const { getMetrics } = usePerformance();

  useEffect(() => {
    const updateMetrics = () => {
      const memory = getMemoryUsage();
      const performanceMetrics = getMetrics();
      
      setMetrics(prev => ({
        ...prev,
        memory,
        metrics: performanceMetrics,
      }));
    };

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, [getMetrics]);

  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (entry as any).value }));
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported:', e);
      }

      return () => observer.disconnect();
    }
  }, []);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return `${ms.toFixed(2)}ms`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Show Performance Dashboard"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {/* Core Web Vitals */}
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Core Web Vitals</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-600' : 'text-green-600'}>
                {metrics.lcp ? formatTime(metrics.lcp) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid && metrics.fid > 100 ? 'text-red-600' : 'text-green-600'}>
                {metrics.fid ? formatTime(metrics.fid) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-600' : 'text-green-600'}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Memory Usage */}
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2 flex items-center">
            <Database className="w-4 h-4 mr-1" />
            Memory
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Used:</span>
              <span>{formatBytes(metrics.memory.used)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>{formatBytes(metrics.memory.total)}</span>
            </div>
            <div className="flex justify-between">
              <span>Usage:</span>
              <span className={metrics.memory.percentage > 80 ? 'text-red-600' : 'text-green-600'}>
                {metrics.memory.percentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        {/* Custom Metrics */}
        {Object.keys(metrics.metrics).length > 0 && (
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-2 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Custom Metrics
            </h4>
            <div className="space-y-1 text-sm">
              {Object.entries(metrics.metrics).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="truncate">{key}:</span>
                  <span>{formatTime(value)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceDashboard;