import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function PerformanceMonitor({ className = '', children }: PerformanceMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function PerformanceMonitor({ className = '', children, ...props }: PerformanceMonitorProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
