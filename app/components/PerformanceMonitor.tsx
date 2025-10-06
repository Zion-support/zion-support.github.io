import React, { useEffect, useState } from 'react';
import { performanceOptimizer } from '../../src/utils/performanceOptimizer';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Initialize performance monitoring
    performanceOptimizer.initialize();
    setIsMonitoring(true);

    // Cleanup on unmount
    return () => {
      setIsMonitoring(false);
    };
  }, []);

  return (
    <div data-performance-monitor={isMonitoring}>
      {children}
    </div>
  );
};

export default PerformanceMonitor;