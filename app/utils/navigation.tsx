import React from 'react';

interface navigationProps {
  className?: string;
}

export default function navigation({ className = '' }: navigationProps) {
  return (
    <div className={`${className}`}>
      <h2>navigation</h2>
      <p>Component content goes here.</p>
    </div>
  );
}