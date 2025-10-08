import React, { useEffect, useState } from 'react';
import { performanceOptimizer } from '../../src/utils/performanceOptimizer';
interface PerformanceMonitorProps {
  children: React.ReactNode;
  className?: string;
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  useEffect(() => {
    // Initialize performance monitoring
    setIsMonitoring(true);
  }, []);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PerformanceMonitor;
