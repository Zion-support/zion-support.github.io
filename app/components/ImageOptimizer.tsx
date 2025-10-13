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
export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  lazy = true
=======
export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
  placeholder
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
<<<<<<< HEAD
=======
      style={{
        backgroundColor: placeholder || '#f3f4f6'
      }}
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
    />
  );
}