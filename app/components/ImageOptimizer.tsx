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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quality = 80,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  format = 'webp',
  lazy = true,
  placeholder
}: ImageOptimizerProps) {
  // Note: quality and format parameters are reserved for future image optimization features
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