import React from 'react';

interface NeonButtonProps {
  className?: string;
}

export default function NeonButton({ className = '' }: NeonButtonProps) {
  return (
    <div className={`${className}`}>
      <h2>NeonButton</h2>
      <p>Component content goes here.</p>
    </div>
  );
}