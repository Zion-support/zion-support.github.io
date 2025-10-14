import React from 'react';

interface AboutPageProps {
  className?: string;
}

export default function AboutPage({ className = '' }: AboutPageProps) {
  return (
    <div className={`${className}`}>
      <h2>AboutPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}