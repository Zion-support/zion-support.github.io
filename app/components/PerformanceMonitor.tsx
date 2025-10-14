import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`performancemonitor ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceMonitor;