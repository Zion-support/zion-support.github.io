import React from 'react';

interface global-errorProps {
  className?: string;
}

export default function global-error({ className = '' }: global-errorProps) {
  return (
    <div className={`${className}`}>
      <h2>global-error</h2>
      <p>Component content goes here.</p>
    </div>
  );
}