'use client';

import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function Image({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  priority = false 
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
    />
  );
}