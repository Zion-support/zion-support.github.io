import React from 'react';

interface PageOptimizedProps {
  className?: string;
}

export default function PageOptimized({ className }: PageOptimizedProps) {
  return (
    <div className={className}>
      <h1>page-optimized</h1>
      <p>Component content</p>
    </div>
  );
}