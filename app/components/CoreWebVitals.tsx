import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
}

export default function CoreWebVitals({ className = '' }: CoreWebVitalsProps) {
  return (
    <div className={`${className}`}>
      <h2>CoreWebVitals</h2>
      <p>Component content goes here.</p>
    </div>
  );
}