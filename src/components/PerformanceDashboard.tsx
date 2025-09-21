import React, { useState, useEffect } from 'react';
import { performanceMonitor, PerformanceMetrics } from '../utils/performanceOptimizations';

interface DashboardProps {
  isVisible: boolean;
  onToggle: () => void;
}

export const PerformanceDashboard: React.FC<DashboardProps> = ({ isVisible, onToggle }) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isMonitoring, setIsMonitoring] = useState(true);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      setMetrics(performanceMonitor.getMetrics());
    }, 1000);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold">Performance Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className="text-xs px-2 py-1 bg-blue-600 rounded hover:bg-blue-700"
          >
            {isMonitoring ? 'Pause' : 'Resume'}
          </button>
          <button
            onClick={onToggle}
            className="text-xs px-2 py-1 bg-red-600 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="font-mono">{metrics.loadTime?.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="font-mono">{metrics.firstContentfulPaint?.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="font-mono">{metrics.largestContentfulPaint?.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="font-mono">{metrics.cumulativeLayoutShift?.toFixed(3)}</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="font-mono">{metrics.firstInputDelay?.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="font-mono">{metrics.memoryUsage?.toFixed(2)}MB</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;