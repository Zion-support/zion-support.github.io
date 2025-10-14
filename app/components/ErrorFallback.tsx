import React from 'react';

interface ErrorFallbackProps {
  className?: string;
}

export default function ErrorFallback({ className = '' }: ErrorFallbackProps) {
  return (
    <div className={`${className}`}>
      <h2>ErrorFallback</h2>
      <p>Component content goes here.</p>
    </div>
  );
}