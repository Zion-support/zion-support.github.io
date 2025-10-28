'use client';

import React, { memo } from 'react';

interface FuturisticGlowProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`futuristic-glow ${className}`}>
      {children}
    </div>
  );
});

FuturisticGlow.displayName = 'FuturisticGlow';

export default FuturisticGlow;