import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
}

export default function ImprovedErrorBoundary({ className = '' }: ImprovedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      <h2>ImprovedErrorBoundary</h2>
      <p>Component content goes here.</p>
    </div>
  );
}