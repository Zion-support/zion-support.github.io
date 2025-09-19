import React, { useState, useEffect } from 'react';

interface PerformanceMetricsProps {
  show: boolean;
}

interface Metrics {
  loadTime: number;
  memoryUsage: number;
  connectionType: string;
  timestamp: string;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ show }) => {
  const [isVisible, setIsVisible] = useState(show);
  const [metrics, setMetrics] = useState<Metrics>({
    loadTime: 0,
    memoryUsage: 0,
    connectionType: 'unknown',
    timestamp: new Date().toISOString()
  });

  useEffect(() => {
    if (!show) return;

    // Measure load time
    const loadTime = performance.now();
    
    // Get memory usage if available
    const memoryUsage = (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0;
    
    // Get connection type
    const connection = (navigator as any).connection?.effectiveType || 'unknown';

    setMetrics({
      loadTime,
      memoryUsage,
      connectionType: connection,
      timestamp: new Date().toISOString()
    });
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg text-xs font-mono max-w-xs shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-green-400">Performance</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close performance metrics"
          >
            ×
          </button>
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className="text-blue-400">{metrics.loadTime.toFixed(2)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className="text-red-400">{metrics.memoryUsage.toFixed(2)}MB</span>
          </div>
          <div className="flex justify-between">
            <span>Connection:</span>
            <span className="text-green-400">{metrics.connectionType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;