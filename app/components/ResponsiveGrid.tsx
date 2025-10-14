'use client';
import React from 'react';

interface ResponsiveGridProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ResponsiveGrid({ children, className = '' }: ResponsiveGridProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}