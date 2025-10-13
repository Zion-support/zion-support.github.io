import React from 'react';

interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImageOptimizer({ className = '', children, ...props }: ImageOptimizerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
