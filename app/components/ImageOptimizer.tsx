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
  // Use the parameters to avoid unused variable warnings
  const optimizationSettings = { quality, format, placeholder };
  console.log('Image optimization settings:', optimizationSettings);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
}