import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

export default function ErrorBoundary({ className }: ErrorBoundaryProps) {
  return (
    <div className={className}>
      <h1>ErrorBoundary</h1>
      <p>Component content</p>
    </div>
  );
}