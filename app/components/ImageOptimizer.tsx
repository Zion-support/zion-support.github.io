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