import React from 'react';

interface SkipLinkProps {
  className?: string;
}

export default function SkipLink({ className = '' }: SkipLinkProps) {
  return (
    <div className={`${className}`}>
      <h2>SkipLink</h2>
      <p>Component content goes here.</p>
    </div>
  );
}