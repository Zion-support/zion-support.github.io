'use client';

import React, { memo } from 'react';

interface SimpleNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleNavigation: React.FC<SimpleNavigationProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <nav className={`simple-navigation ${className}`}>
      {children}
    </nav>
  );
});

SimpleNavigation.displayName = 'SimpleNavigation';

export default SimpleNavigation;