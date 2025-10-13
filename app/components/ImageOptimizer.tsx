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
  quality: _quality = 80,
  format: _format = 'webp',
  placeholder
}: ImageOptimizerProps) {
  // Note: quality and format parameters are available for future use
  // when implementing actual image optimization
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