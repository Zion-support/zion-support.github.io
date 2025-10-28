
import React from 'react';

interface AdvancedPerformanceMonitorProps {
  className?: string;
  children: React.ReactNode;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      {children}
    </div>
  );
};

AdvancedPerformanceMonitor.displayName = 'AdvancedPerformanceMonitor';

export default AdvancedPerformanceMonitor;
