import React from 'react';

interface MetaTagsProps {
  className?: string;
}

export default function MetaTags({ className }: MetaTagsProps) {
  return (
    <div className={className}>
      <h1>MetaTags</h1>
      <p>Component content</p>
    </div>
  );
}