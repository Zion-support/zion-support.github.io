import React from 'react';

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableMonitoring?: boolean;
  enableResourceHints?: boolean;
  enablePreloading?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableServiceWorker = true,
  enableMonitoring = true,
  enableResourceHints = true,
  enablePreloading = true
}) => {
  const [memoryUsage, setMemoryUsage] = React.useState(0);

  const updateMemoryUsage = React.useCallback(() => {
    if (typeof window !== 'undefined' && (performance as any).memory) {
      const memory = (performance as any).memory;
      setMemoryUsage(Math.round(memory.usedJSHeapSize / 1024 / 1024));
    }
  }, []);

  React.useEffect(() => {
    if (enableMonitoring) {
      const interval = setInterval(updateMemoryUsage, 5000);
      return () => clearInterval(interval);
    }
  }, [enableMonitoring, updateMemoryUsage]);

  return (
    <div className="performance-optimizer">
      {enableMonitoring && (
        <div>
          <h3>Performance Monitor</h3>
          <p>Memory Usage: {memoryUsage}MB</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;