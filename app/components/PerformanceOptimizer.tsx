import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface PerformanceOptimizerProps {
=======
interface PerformanceoptimizerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface PerformanceOptimizerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
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
<<<<<<< HEAD
}
=======
export default function PerformanceOptimizer({ className = '', children, ...props }: PerformanceOptimizerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
