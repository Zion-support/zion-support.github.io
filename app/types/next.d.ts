import React from 'react';

interface next.d.tsProps {
  className?: string;
}

export default function next.d.ts({ className = '' }: next.d.tsProps) {
  return (
    <div className={`${className}`}>
      <h2>next.d.ts</h2>
      <p>Component content goes here.</p>
    </div>
  );
}