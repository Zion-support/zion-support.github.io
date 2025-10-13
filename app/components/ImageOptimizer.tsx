import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  placeholder?: string;
}


export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  quality = 80,
  format = 'webp',
  lazy = true,
  placeholder
<<<<<<< HEAD
=======

  lazy = true



export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
  placeholder


>>>>>>> 16298d5b7981c71a386c4e8d112e77e49ff2ba16
}: ImageOptimizerProps) {
  // Note: quality and format parameters are reserved for future image optimization features
  console.log('Image optimization params:', { quality, format });
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      style={{
        backgroundColor: placeholder || '#f3f4f6'
      }}
<<<<<<< HEAD
=======





>>>>>>> 16298d5b7981c71a386c4e8d112e77e49ff2ba16
    />
  );
}