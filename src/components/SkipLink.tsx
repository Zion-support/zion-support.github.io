import React from 'react';

interface SkipLinkProps {
  className?: string;
}

export default function SkipLink({ className }: SkipLinkProps) {
  return (
    <div className={className}>
      <h1>SkipLink</h1>
      <p>Component content</p>
    </div>
  );
}