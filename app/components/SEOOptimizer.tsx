import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOOptimizer({ className = '', children, ...props }: SEOOptimizerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
