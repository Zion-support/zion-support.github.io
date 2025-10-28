'use client';

import React, { memo } from 'react';

interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`image-optimizer ${className}`}>
      {children}
    </div>
  );
});

ImageOptimizer.displayName = 'ImageOptimizer';

export default ImageOptimizer;