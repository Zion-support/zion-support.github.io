import React from 'react';

interface errorBoundaryConfigProps {
  className?: string;
}

export default function errorBoundaryConfig({ className }: errorBoundaryConfigProps) {
  return (
    <div className={className}>
      <h1>errorBoundaryConfig</h1>
      <p>Component content</p>
    </div>
  );
}