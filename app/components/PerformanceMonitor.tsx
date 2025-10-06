import React from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`performance-monitor ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceMonitor;
