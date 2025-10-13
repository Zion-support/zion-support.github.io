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
    />
  );
}