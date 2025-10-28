'use client';

import React, { memo } from 'react';

interface EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-hero ${className}`}>
      {children}
    </div>
  );
});

EnhancedHero.displayName = 'EnhancedHero';

export default EnhancedHero;