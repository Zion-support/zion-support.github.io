
import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`seo-optimizer ${className}`}>
      {children}
    </div>
  );
};

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;