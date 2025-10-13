import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`core-web-vitals ${className}`}>
      {children}
    </div>
}

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {'
      }
