import React from 'react';

interface PerformanceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">PerformanceEnhancer</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {children}
    </div>
  );
};

export default PerformanceEnhancer;
