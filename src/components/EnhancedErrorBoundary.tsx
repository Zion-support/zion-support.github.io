import React from 'react';

interface EnhancedErrorBoundaryProps {
  className?: string;
}

export default function EnhancedErrorBoundary({ className }: EnhancedErrorBoundaryProps) {
  return (
    <div className={className}>
      <h1>EnhancedErrorBoundary</h1>
      <p>Component content</p>
    </div>
  );
}