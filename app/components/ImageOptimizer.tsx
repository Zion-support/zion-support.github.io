import React from 'react';

interface ImageOptimizerProps {
<<<<<<< HEAD
=======
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  placeholder?: string;
}

>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
<<<<<<< HEAD
=======
  quality = 80,
  format = 'webp',
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
  placeholder
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      style={{
<<<<<<< HEAD
        backgroundImage: placeholder ? `url(${placeholder})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
=======
        backgroundColor: placeholder || '#f3f4f6'
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
      }}
    />
  );
}