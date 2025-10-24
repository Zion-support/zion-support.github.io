import React from 'react';

interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'seooptimizer ' + className}>
      {children || <p>SEOOptimizer component</p>}
    </div>
  );
};

export default SEOOptimizer;
