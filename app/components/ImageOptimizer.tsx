import React from 'react';

interface ImageOptimizerProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  placeholder?: string;
}

<<<<<<< HEAD
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
=======
export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  lazy = true
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
<<<<<<< HEAD
      style={{
<<<<<<< HEAD
        backgroundImage: placeholder ? `url(${placeholder})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
=======
        backgroundColor: placeholder || '#f3f4f6'
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
      }}
=======
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
    />
  );
}