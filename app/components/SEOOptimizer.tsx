import React from 'react';

interface _SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}


const SEOOptimizer: React.FC<_SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`eooptimizer ${className}`}>
      {children}
    </div>
  );
};

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;