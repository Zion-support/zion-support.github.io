import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
interface AdvancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className, children }) => {
  return (
    <div className={className}>
=======

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
      {children}
    </div>
  );
};
<<<<<<< HEAD
export default AdvancedPerformanceMonitor;
=======

export default AdvancedPerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
