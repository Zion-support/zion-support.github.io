'use client';

import React, { memo } from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`futuristic-background ${className}`}>
      {children}
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

export default FuturisticBackground;