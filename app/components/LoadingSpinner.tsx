import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className = '' }: LoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      <h2>LoadingSpinner</h2>
      <p>Component content goes here.</p>
    </div>
  );
}