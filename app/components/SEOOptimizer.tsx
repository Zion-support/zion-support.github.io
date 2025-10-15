import React from 'react';

interface SeooptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seooptimizer({ className = '', children }: SeooptimizerProps) {
  return (
    <div className={`SEOOptimizer-component ${className}`}>
      {children}
    </div>
  );
}