import React from 'react';

interface linkProps {
  className?: string;
}

export default function link({ className = '' }: linkProps) {
  return (
    <div className={`${className}`}>
      <h2>link</h2>
      <p>Component content goes here.</p>
    </div>
  );
}