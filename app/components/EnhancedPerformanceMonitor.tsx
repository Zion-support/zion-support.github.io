<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
