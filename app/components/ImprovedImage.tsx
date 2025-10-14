import React from 'react';

interface ImprovedImageProps {
  className?: string;
}

export default function ImprovedImage({ className = '' }: ImprovedImageProps) {
  return (
    <div className={`${className}`}>
      <h2>ImprovedImage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}