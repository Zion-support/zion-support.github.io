'use client';

import React, { memo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = memo(({ 
  src, 
  alt, 
  className = '' 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`lazy-image ${className}`}
      loading="lazy"
    />
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;