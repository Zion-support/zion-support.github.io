'use client';

import React, { memo } from 'react';

interface PerformanceImageProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceImage: React.FC<PerformanceImageProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`performance-image ${className}`}>
      {children}
    </div>
  );
});

PerformanceImage.displayName = 'PerformanceImage';

export default PerformanceImage;