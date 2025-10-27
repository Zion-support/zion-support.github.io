import React from 'react';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'enhancedperformancemonitor ' + className}>
      {children || <p>EnhancedPerformanceMonitor component</p>}
    </div>
  );
};

export default EnhancedPerformanceMonitor;
