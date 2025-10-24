import React from 'react';

interface LoadingStatesProps {
  className?: string;
}

export default function LoadingStates({ className }: LoadingStatesProps) {
  return (
    <div className={className}>
      <h1>LoadingStates</h1>
      <p>Component content</p>
    </div>
  );
}