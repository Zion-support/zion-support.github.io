import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
}

export default function CoreWebVitals({ className = '' }: CoreWebVitalsProps) {
  return (
    <div className={`core-web-vitals ${className}`}>
      <h3>Core Web Vitals</h3>
      <p>Core Web Vitals monitoring component</p>
    </div>
  );
}