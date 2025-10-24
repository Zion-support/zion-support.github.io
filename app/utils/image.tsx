import React from 'react';

interface imageProps {
  className?: string;
}

export default function image({ className }: imageProps) {
  return (
    <div className={className}>
      <h1>image</h1>
      <p>Component content</p>
    </div>
  );
}