import React from 'react';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedperformancemonitor ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedPerformanceMonitor;