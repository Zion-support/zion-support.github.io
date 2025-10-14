import React from 'react';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className = '' }: LoadingProps) {
  return (
    <div className={`${className}`}>
      <h2>Loading</h2>
      <p>Component content goes here.</p>
    </div>
  );
}