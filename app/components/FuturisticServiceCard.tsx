'use client';

import React, { memo } from 'react';

interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`futuristic-service-card ${className}`}>
      {children}
    </div>
  );
});

FuturisticServiceCard.displayName = 'FuturisticServiceCard';

export default FuturisticServiceCard;