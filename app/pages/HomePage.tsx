import React from 'react';

interface HomePageProps {
  className?: string;
}

export default function HomePage({ className = '' }: HomePageProps) {
  return (
    <div className={`${className}`}>
      <h2>HomePage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}