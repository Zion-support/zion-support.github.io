import React from 'react';

interface StructuredDataProps {
  className?: string;
}

export default function StructuredData({ className }: StructuredDataProps) {
  return (
    <div className={className}>
      <h1>StructuredData</h1>
      <p>Component content</p>
    </div>
  );
}