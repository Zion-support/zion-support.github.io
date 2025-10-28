<<<<<<< HEAD

import React from 'react';
interface AdvancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      {children}
    </div>
  );
};

AdvancedPerformanceMonitor.displayName = 'AdvancedPerformanceMonitor';

export default AdvancedPerformanceMonitor;