import React from 'react';

interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`ImageOptimizer ${className}`}>
      {children}
    </div>
  );
};

export default ImageOptimizer;