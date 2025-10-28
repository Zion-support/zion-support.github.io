import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={className}>
      <h1>SEO Optimizer</h1>
      {children}
    </div>
  );
};

export default SEOOptimizer;