import React from 'react';

interface SupportPageProps {
  className?: string;
}

export default function SupportPage({ className = '' }: SupportPageProps) {
  return (
    <div className={`${className}`}>
      <h2>SupportPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}