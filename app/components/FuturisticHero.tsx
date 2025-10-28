'use client';

import React, { memo } from 'react';

interface FuturisticHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`futuristic-hero ${className}`}>
      {children}
    </div>
  );
});

FuturisticHero.displayName = 'FuturisticHero';

export default FuturisticHero;