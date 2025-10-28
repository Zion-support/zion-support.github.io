'use client';

import React, { memo } from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticCard: React.FC<FuturisticCardProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`futuristic-card ${className}`}>
      {children}
    </div>
  );
});

FuturisticCard.displayName = 'FuturisticCard';

export default FuturisticCard;