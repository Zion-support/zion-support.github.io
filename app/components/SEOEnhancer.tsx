import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`seoenhancer-component ${className}`}>
      {children}
    </div>
  );
};

SEOEnhancer.displayName = 'SEOEnhancer';

export default SEOEnhancer;
