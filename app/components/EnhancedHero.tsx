'use client';
import React from 'react';

interface EnhancedHeroProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedHero({ children, className = '' }: EnhancedHeroProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}