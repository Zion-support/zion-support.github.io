import React from 'react';

interface CareersPageProps {
  className?: string;
}

export default function CareersPage({ className = '' }: CareersPageProps) {
  return (
    <div className={`${className}`}>
      <h2>CareersPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}