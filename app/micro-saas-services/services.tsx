import React from 'react';

interface servicesProps {
  className?: string;
}

export default function services({ className = '' }: servicesProps) {
  return (
    <div className={`${className}`}>
      <h2>services</h2>
      <p>Component content goes here.</p>
    </div>
  );
}