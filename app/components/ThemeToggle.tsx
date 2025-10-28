'use client';

import React, { memo } from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <button className={`theme-toggle ${className}`}>
      {children}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;