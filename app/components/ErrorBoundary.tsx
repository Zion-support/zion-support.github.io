import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

export default function ErrorBoundary({ className = '' }: ErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      <h2>ErrorBoundary</h2>
      <p>Component content goes here.</p>
    </div>
  );
}