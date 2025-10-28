import React from 'react';


interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

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

