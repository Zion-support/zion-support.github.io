import React from 'react';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
  return (
    <div className={className}>
      <h1>Loading</h1>
      <p>Component content</p>
    </div>
  );
}