import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`seooptimizer-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SEOOptimizer</h3>
          <p className="text-gray-600">This is the SEOOptimizer component.</p>
        </div>
      )}
    </div>
  );
};

export default SEOOptimizer;