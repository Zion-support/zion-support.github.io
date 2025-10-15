import React from 'react';

interface WebvitalstrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Webvitalstracker({ className = '', children }: WebvitalstrackerProps) {
  return (
    <div className={`WebVitalsTracker-component ${className}`}>
      {children}
    </div>
  );
}