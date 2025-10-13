import React from 'react';

interface ImageOptimizerProps {
export default function ImageOptimizer({
  src,
  alt,
  className = '',
  lazy = true,
  placeholder
}: ImageOptimizerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      style={{
        backgroundImage: placeholder ? `url(${placeholder})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
}