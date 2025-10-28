'use client';

import React, { memo } from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`loading-states ${className}`}>
      {children}
    </div>
  );
});

LoadingStates.displayName = 'LoadingStates';

export default LoadingStates;