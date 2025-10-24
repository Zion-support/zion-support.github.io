import React from 'react';

interface PerformanceImageProps {
  className?: string;
}

export default function PerformanceImage({ className }: PerformanceImageProps) {
  return (
    <div className={className}>
      <h1>PerformanceImage</h1>
      <p>Component content</p>
    </div>
  );
}