import React from 'react';

interface mainProps {
  className?: string;
}

export default function main({ className = '' }: mainProps) {
  return (
    <div className={`${className}`}>
      <h2>main</h2>
      <p>Component content goes here.</p>
    </div>
  );
}