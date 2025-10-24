<<<<<<< HEAD
import React from 'react';

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default OptimizedImage;
=======
'use client'

import React from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-image ${className}`}
      loading="lazy"
    />
  )
}

export default OptimizedImage
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
