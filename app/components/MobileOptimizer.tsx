import React from 'react';

interface MobileOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MobileOptimizer({ 
  className = '',
  children 
}: MobileOptimizerProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">MobileOptimizer</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
