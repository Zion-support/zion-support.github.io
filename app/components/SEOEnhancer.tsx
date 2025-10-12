import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOEnhancer({ 
  className = '',
  children 
}: SEOEnhancerProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">SEOEnhancer</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
