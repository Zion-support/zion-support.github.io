import React from 'react';

interface loadingProps {
  className?: string;
}

export default function loading({ className = '' }: loadingProps) {
  return (
    <div className={`${className}`}>
      <h2>loading</h2>
      <p>Component content goes here.</p>
    </div>
  );
}