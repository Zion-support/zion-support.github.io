import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOOptimizer({ 
  className = '',
  children 
}: SEOOptimizerProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">SEOOptimizer</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
