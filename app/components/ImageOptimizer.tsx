
import React from 'react';
import Image from 'next/image';

interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`imageoptimizer-component ${className}`}>
      {children}
    </div>
  );
};

ImageOptimizer.displayName = 'ImageOptimizer';

export default ImageOptimizer;