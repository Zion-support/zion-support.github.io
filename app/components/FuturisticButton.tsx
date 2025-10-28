'use client';

import React, { memo } from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <button className={`futuristic-button ${className}`}>
      {children}
    </button>
  );
});

FuturisticButton.displayName = 'FuturisticButton';

export default FuturisticButton;