import React from 'react';

interface ImageOptimizerProps {
  className?: string;
}

export default function ImageOptimizer({ className }: ImageOptimizerProps) {
  return (
    <div className={className}>
      <h1>ImageOptimizer</h1>
      <p>Component content</p>
    </div>
  );
}