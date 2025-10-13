import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`core-web-vitals ${className}`}>
      <h3>Core Web Vitals</h3>
      <p>Core Web Vitals monitoring component</p>
      {children}
    </div>
  );
}