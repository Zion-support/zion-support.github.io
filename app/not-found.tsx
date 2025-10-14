import React from 'react';

interface not-foundProps {
  className?: string;
}

export default function not-found({ className = '' }: not-foundProps) {
  return (
    <div className={`${className}`}>
      <h2>not-found</h2>
      <p>Component content goes here.</p>
    </div>
  );
}