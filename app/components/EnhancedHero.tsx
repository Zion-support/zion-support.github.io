'use client';

import React from 'react';

interface EnhancedHeroProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedHero;