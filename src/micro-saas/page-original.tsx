import React from 'react';

interface PageOriginalProps {
  className?: string;
}

export default function PageOriginal({ className }: PageOriginalProps) {
  return (
    <div className={className}>
      <h1>page-original</h1>
      <p>Component content</p>
    </div>
  );
}