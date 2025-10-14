'use client';
import React from 'react';

interface ImprovedNavigationProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ImprovedNavigation({ children, className = '' }: ImprovedNavigationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}