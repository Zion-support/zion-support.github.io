import React from 'react';
import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';

interface SEOOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SEOOptimizer({ className = '', children, ...props }: SEOOptimizerProps) {
  return (
    <div className={`seooptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}