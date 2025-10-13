import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';
<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
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