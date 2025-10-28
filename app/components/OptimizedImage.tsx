'use client';

import React, { memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width}
      height={height}
      className={`optimized-image ${className}`}
      loading="lazy"
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;