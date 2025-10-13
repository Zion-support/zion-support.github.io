import React from 'react';

interface FuturisticHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticHero({ className = '', children }: FuturisticHeroProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}