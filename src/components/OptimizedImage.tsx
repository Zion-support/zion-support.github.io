import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

export default function OptimizedImage({ className }: OptimizedImageProps) {
  return (
    <div className={className}>
      <h1>OptimizedImage</h1>
      <p>Component content</p>
    </div>
  );
}