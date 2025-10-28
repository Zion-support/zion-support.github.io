import React from 'react';


334a97c43c32bf9e815481016c5bf31caa46a580
interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
334a97c43c32bf9e815481016c5bf31caa46a580
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`seooptimizer-component ${className}`}>
      {children}
    </div>
  );
};

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer;