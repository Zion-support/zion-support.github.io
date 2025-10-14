'use client';
import React from 'react';

interface MobileNavigationProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MobileNavigation({ children, className = '' }: MobileNavigationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}