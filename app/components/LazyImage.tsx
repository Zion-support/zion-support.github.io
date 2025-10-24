<<<<<<< HEAD
import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default LazyImage;
=======
'use client'

import React, { useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      className={`lazy-image ${className} ${loaded ? 'loaded' : ''}`}
      onLoad={() => setLoaded(true)}
    />
  )
}

export default LazyImage
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
