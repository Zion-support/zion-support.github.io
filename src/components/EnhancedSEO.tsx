import React from 'react';

interface EnhancedSEOProps {
  className?: string;
}

export default function EnhancedSEO({ className }: EnhancedSEOProps) {
  return (
    <div className={className}>
      <h1>EnhancedSEO</h1>
      <p>Component content</p>
    </div>
  );
}