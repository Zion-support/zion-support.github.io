import React from 'react';

interface OptimizedImageProps {
  className?: string;
}

export default function OptimizedImage({ className = '' }: OptimizedImageProps) {
  return (
    <div className={`${className}`}>
      <h2>OptimizedImage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}