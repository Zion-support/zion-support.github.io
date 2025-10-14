import React from 'react';

interface NotFoundProps {
  className?: string;
}

export default function NotFound({ className = '' }: NotFoundProps) {
  return (
    <div className={`${className}`}>
      <h2>not-found</h2>
      <p>Component content goes here.</p>
    </div>
  );
}