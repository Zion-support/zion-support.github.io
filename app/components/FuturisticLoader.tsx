'use client';

import React, { memo } from 'react';

interface FuturisticLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`futuristic-loader ${className}`}>
      {children}
    </div>
  );
});

FuturisticLoader.displayName = 'FuturisticLoader';

export default FuturisticLoader;