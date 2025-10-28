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
cursor/fix-errors-and-merge-to-main-7271

export default SEOEnhancer;