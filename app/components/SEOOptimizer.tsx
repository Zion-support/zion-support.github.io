import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

cursor/fix-errors-and-merge-to-main-7271

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`seooptimizer-component ${className}`}>
      {children}
    </div>
  );
};

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;