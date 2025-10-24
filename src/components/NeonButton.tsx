import React from 'react';

interface NeonButtonProps {
  className?: string;
}

export default function NeonButton({ className }: NeonButtonProps) {
  return (
    <div className={className}>
      <h1>NeonButton</h1>
      <p>Component content</p>
    </div>
  );
}