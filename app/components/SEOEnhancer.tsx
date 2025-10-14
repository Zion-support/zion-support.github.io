import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`seoenhancer-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">SEOEnhancer</h3>
          <p className="text-gray-600">This is the SEOEnhancer component.</p>
        </div>
      )}
    </div>
  );
};

export default SEOEnhancer;