<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';

interface AdvancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function AdvancedPerformanceMonitor({ className = '', children }: AdvancedPerformanceMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
<<<<<<< HEAD
=======
export default function AdvancedPerformanceMonitor({ className = '', children, ...props }: AdvancedPerformanceMonitorProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
