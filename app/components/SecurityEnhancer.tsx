import React from 'react';

interface SecurityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SecurityEnhancer({ 
  className = '',
  children 
}: SecurityEnhancerProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">SecurityEnhancer</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
