import React from 'react';

interface usePerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const usePerformanceMonitor: React.FC<usePerformanceMonitorProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`useperformancemonitor ${className}`}>
      {children}
    </div>
  );
};

export default usePerformanceMonitor;