import React from 'react';

interface errorProps {
  className?: string;
}

export default function error({ className = '' }: errorProps) {
  return (
    <div className={`${className}`}>
      <h2>error</h2>
      <p>Component content goes here.</p>
    </div>
  );
}