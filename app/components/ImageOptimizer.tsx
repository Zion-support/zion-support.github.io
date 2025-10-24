<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ImageOptimizer;
=======

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'imageoptimizer ' + className}>
      {children || <p>ImageOptimizer component</p>}
    </div>
  );
};

export default ImageOptimizer;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
