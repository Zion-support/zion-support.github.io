import React from 'react';

<<<<<<< HEAD
interface PerformanceOptimizerProps {
=======
interface PerformanceoptimizerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function PerformanceOptimizer({ className = '', children }: PerformanceOptimizerProps) {
=======
export default function Performanceoptimizer({ className = '', children, ...props }: PerformanceoptimizerProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}