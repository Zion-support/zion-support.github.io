import React from 'react';

interface TeamPageProps {
  className?: string;
}

export default function TeamPage({ className = '' }: TeamPageProps) {
  return (
    <div className={`${className}`}>
      <h2>TeamPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}