import React from 'react';

interface SEOEnhancerProps {
  className?: string;
}

export default function SEOEnhancer({ className }: SEOEnhancerProps) {
  return (
    <div className={className}>
      <h1>SEOEnhancer</h1>
      <p>Component content</p>
    </div>
  );
}