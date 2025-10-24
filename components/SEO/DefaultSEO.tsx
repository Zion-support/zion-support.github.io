import React from 'react';

interface DefaultSEOProps {
  className?: string;
}

export default function DefaultSEO({ className }: DefaultSEOProps) {
  return (
    <div className={className}>
      <h1>DefaultSEO</h1>
      <p>Component content</p>
    </div>
  );
}