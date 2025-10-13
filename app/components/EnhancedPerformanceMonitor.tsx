import React from 'react';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function EnhancedPerformanceMonitor({ className = '', children }: EnhancedPerformanceMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function EnhancedPerformanceMonitor({ className = '', children, ...props }: EnhancedPerformanceMonitorProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
