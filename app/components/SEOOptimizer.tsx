import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function SEOOptimizer({ className = '', children }: SEOOptimizerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function SEOOptimizer({ className = '', children, ...props }: SEOOptimizerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
