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
=======
>>>>>>> 0da0de9a40ceae2cf98b043331c5936c6960e4fa
export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  quality = 80,
  format = 'webp',
<<<<<<< HEAD
=======
>>>>>>> 0da0de9a40ceae2cf98b043331c5936c6960e4fa
  lazy = true,
  quality,
  format,
  placeholder
}: ImageOptimizerProps) {
  // Note: quality, format, and placeholder are available for future implementation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _unused = { quality, format, placeholder };
  
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