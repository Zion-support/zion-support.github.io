import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

export default function GlobalErrorBoundary({ className }: GlobalErrorBoundaryProps) {
  return (
    <div className={className}>
      <h1>GlobalErrorBoundary</h1>
      <p>Component content</p>
    </div>
  );
}