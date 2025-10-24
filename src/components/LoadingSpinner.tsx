import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={className}>
      <h1>LoadingSpinner</h1>
      <p>Component content</p>
    </div>
  );
}