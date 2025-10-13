import React, { useEffect } from 'react';
interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '', children }) => {
  useEffect(() => {
    // Performance monitoring logic can be added here
    console.log('Performance Monitor initialized');
  }, []);
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};
export default PerformanceMonitor;