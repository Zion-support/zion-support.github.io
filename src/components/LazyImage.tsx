import React from 'react';

interface LazyImageProps {
  className?: string;
}

export default function LazyImage({ className }: LazyImageProps) {
  return (
    <div className={className}>
      <h1>LazyImage</h1>
      <p>Component content</p>
    </div>
  );
}