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
<<<<<<< HEAD:app/components/PerformanceMonitor.tsx
    performanceOptimizer.performanceOptimizer.initialize();
    setIsMonitoring(true);
    // Cleanup on unmount
    return () => {
      setIsMonitoring(false);
    };
  }, []);
  return (
    <div 
      className={`performance-monitor ${className}`}
      data-performance-monitor={isMonitoring}
    >
      {children}
    </div>
  );
};
export default PerformanceMonitor;
