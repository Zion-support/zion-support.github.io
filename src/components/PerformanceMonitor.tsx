import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PerformanceOptimizer } from '../utils/performanceOptimizer';

interface PerformanceMetrics {
  LCP?: number;
  FID?: number;
  CLS?: number;
  FCP?: number;
  TTFB?: number;
  memory?: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  threshold?: {
    LCP: number;
    FID: number;
    CLS: number;
  };
  onThresholdExceeded?: (metric: string, value: number) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  threshold = {
    LCP: 2500, // 2.5 seconds
    FID: 100,  // 100ms
    CLS: 0.1   // 0.1
  },
  onThresholdExceeded
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const checkThresholds = useCallback((newMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (newMetrics.LCP && newMetrics.LCP > threshold.LCP) {
      newAlerts.push(`LCP is ${newMetrics.LCP.toFixed(0)}ms (threshold: ${threshold.LCP}ms)`);
      onThresholdExceeded?.('LCP', newMetrics.LCP);
    }

    if (newMetrics.FID && newMetrics.FID > threshold.FID) {
      newAlerts.push(`FID is ${newMetrics.FID.toFixed(0)}ms (threshold: ${threshold.FID}ms)`);
      onThresholdExceeded?.('FID', newMetrics.FID);
    }

    if (newMetrics.CLS && newMetrics.CLS > threshold.CLS) {
      newAlerts.push(`CLS is ${newMetrics.CLS.toFixed(3)} (threshold: ${threshold.CLS})`);
      onThresholdExceeded?.('CLS', newMetrics.CLS);
    }

    setAlerts(newAlerts);
  }, [threshold, onThresholdExceeded]);

  useEffect(() => {
    const optimizer = PerformanceOptimizer.getInstance();
    optimizer.init();

    const updateMetrics = () => {
      const newMetrics = optimizer.getMetrics();
      setMetrics(newMetrics);
      checkThresholds(newMetrics);
    };

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);

    // Initial update
    updateMetrics();

    return () => {
      optimizer.cleanup();
      clearInterval(interval);
    };
  }, [checkThresholds]);

  useEffect(() => {
    // Monitor memory usage
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: memoryInfo.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  const getMetricColor = (metric: string, value: number) => {
    switch (metric) {
      case 'LCP':
        return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400';
      case 'FID':
        return value <= 100 ? 'text-green-400' : value <= 300 ? 'text-yellow-400' : 'text-red-400';
      case 'CLS':
        return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getMetricStatus = (metric: string, value: number) => {
    switch (metric) {
      case 'LCP':
        if (value <= 2500) return 'Good';
        if (value <= 4000) return 'Needs Improvement';
        return 'Poor';
      case 'FID':
        if (value <= 100) return 'Good';
        if (value <= 300) return 'Needs Improvement';
        return 'Poor';
      case 'CLS':
        if (value <= 0.1) return 'Good';
        if (value <= 0.25) return 'Needs Improvement';
        return 'Poor';
      default:
        return 'Unknown';
    }
  };

  if (!showMetrics) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-4 right-4 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-700 max-w-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{key}:</span>
                <div className="text-right">
                  <span className={`text-sm font-mono ${getMetricColor(key, value)}`}>
                    {typeof value === 'number' ? value.toFixed(2) : 'N/A'}
                    {key === 'memory' ? ' MB' : key === 'CLS' ? '' : ' ms'}
                  </span>
                  <div className="text-xs text-gray-500">
                    {getMetricStatus(key, value)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {alerts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 pt-4 border-t border-gray-700"
            >
              <h4 className="text-sm font-semibold text-red-400 mb-2">Alerts</h4>
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <div key={index} className="text-xs text-red-300 bg-red-900 bg-opacity-20 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="mt-4 pt-4 border-t border-gray-700">
            <button
              onClick={() => {
                setMetrics({});
                setAlerts([]);
                const optimizer = PerformanceOptimizer.getInstance();
                optimizer.reportMetrics();
              }}
              className="w-full text-xs bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded transition-colors"
            >
              Reset & Report
            </button>
          </div>
        </motion.div>
      )}

      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-4 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        📊
      </motion.button>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;