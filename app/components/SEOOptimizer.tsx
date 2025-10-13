import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOOptimizer({ className = '', children }: SEOOptimizerProps) {
  return (
    <div className={`seooptimizer ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">SEOOptimizer</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}