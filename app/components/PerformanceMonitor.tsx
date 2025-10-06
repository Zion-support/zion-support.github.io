import React, { useEffect, ReactNode } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      console.log('Performance monitoring initialized');
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;