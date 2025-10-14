import React from 'react';

interface dynamicProps {
  className?: string;
}

export default function dynamic({ className = '' }: dynamicProps) {
  return (
    <div className={`${className}`}>
      <h2>dynamic</h2>
      <p>Component content goes here.</p>
    </div>
  );
}