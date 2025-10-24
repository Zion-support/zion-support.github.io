import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default SEOOptimizer;
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
