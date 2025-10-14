import React from 'react';

interface imageProps {
  className?: string;
}

export default function image({ className = '' }: imageProps) {
  return (
    <div className={`${className}`}>
      <h2>image</h2>
      <p>Component content goes here.</p>
    </div>
  );
}