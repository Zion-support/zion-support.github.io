'use client';
import React from 'react';

interface PageOptimizedProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PageOptimized({ children, className = '' }: PageOptimizedProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}