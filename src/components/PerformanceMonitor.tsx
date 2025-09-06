import React from 'react';
import { usePerformance } from '../hooks/usePerformance';

const PerformanceMonitor: React.FC = () => {
  const { metrics, isMonitoring } = usePerformance();

  if (!isMonitoring) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>FPS: {metrics.fps}</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
        <div>Load Time: {metrics.loadTime}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;