import React from 'react';

interface EnhancedHeroProps {
  className?: string;
}

export default function EnhancedHero({ className }: EnhancedHeroProps) {
  return (
    <div className={className}>
      <h1>EnhancedHero</h1>
      <p>Component content</p>
    </div>
  );
}