import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  width, 
  height 
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-image ${className}`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}