'use client';

import React, { memo } from 'react';

interface LazyWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`lazy-wrapper ${className}`}>
      {children}
    </div>
  );
});

LazyWrapper.displayName = 'LazyWrapper';

export default LazyWrapper;