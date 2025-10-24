import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
}

export default function EnhancedLoading({ className }: EnhancedLoadingProps) {
  return (
    <div className={className}>
      <h1>EnhancedLoading</h1>
      <p>Component content</p>
    </div>
  );
}