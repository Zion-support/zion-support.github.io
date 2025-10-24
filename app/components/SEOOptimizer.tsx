import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`seooptimizer ${className}`}>
      {children}
    </div>
  );
};

export default SEOOptimizer;