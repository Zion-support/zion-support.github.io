import React from 'react';

interface SEOHeadProps {
  className?: string;
}

export default function SEOHead({ className }: SEOHeadProps) {
  return (
    <div className={className}>
      <h1>SEOHead</h1>
      <p>Component content</p>
    </div>
  );
}