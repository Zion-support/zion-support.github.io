import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

export default function GlobalErrorBoundary({ className = '' }: GlobalErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      <h2>GlobalErrorBoundary</h2>
      <p>Component content goes here.</p>
    </div>
  );
}