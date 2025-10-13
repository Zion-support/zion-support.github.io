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
  lazy = true,
  quality = 80,
  format = 'webp',
  placeholder
}: ImageOptimizerProps) {
  // Note: quality, format, and placeholder are available for future implementation
  console.log('Image optimization params:', { quality, format, placeholder });
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      style={{ imageRendering: 'auto' }}
    />
  );
}