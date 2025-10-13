import React from 'react';

interface EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedHero({ className = '', children }: EnhancedHeroProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}