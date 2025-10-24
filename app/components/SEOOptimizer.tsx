import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';
import React from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
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