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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4df1
export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  quality = 80,
  format = 'webp',
<<<<<<< HEAD
=======
export default function ImageOptimizer({
  src,
  alt,
  className = '',
>>>>>>> cursor/fix-errors-and-merge-to-main-82b8
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4df1
  lazy = true,
  placeholder
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
    />
  );
}
