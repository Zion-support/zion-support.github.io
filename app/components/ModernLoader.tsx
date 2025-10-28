'use client';

import React, { memo } from 'react';

interface ModernLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const ModernLoader: React.FC<ModernLoaderProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`modern-loader ${className}`}>
      {children}
    </div>
  );
});

ModernLoader.displayName = 'ModernLoader';

export default ModernLoader;