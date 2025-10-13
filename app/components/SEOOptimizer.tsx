import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';

interface SEOOptimizerProps {
  children: React.ReactNode;
=======
import React from 'react';

interface SeooptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seooptimizer({ className = '', children, ...props }: SeooptimizerProps) {
  return (
    <div className={`seooptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
