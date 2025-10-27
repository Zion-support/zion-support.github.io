import React from 'react';

interface _ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}


const ImageOptimizer: React.FC<_ImageOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`mageoptimizer ${className}`}>
      {children}
    </div>
  );
};

ImageOptimizer.displayName = 'ImageOptimizer';

export default ImageOptimizer;