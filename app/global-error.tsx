import React from 'react';

interface GlobalErrorProps {
  className?: string;
}

export default function GlobalError({ className = '' }: GlobalErrorProps) {
  return (
    <div className={`${className}`}>
      <h2>global-error</h2>
      <p>Component content goes here.</p>
    </div>
  );
}