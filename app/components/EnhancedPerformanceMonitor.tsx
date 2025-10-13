import React from 'react';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

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
