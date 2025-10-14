import React from 'react';

interface LazyImageProps {
  className?: string;
}

export default function LazyImage({ className = '' }: LazyImageProps) {
  return (
    <div className={`${className}`}>
      <h2>LazyImage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}