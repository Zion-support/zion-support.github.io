'use client';
import React from 'react';
<<<<<<< HEAD
interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default SEOOptimizer;
=======

export default function SEOOptimizer() {
  return (
    <div>
      <h1>SEOOptimizer</h1>
      <p>SEOOptimizer content.</p>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
