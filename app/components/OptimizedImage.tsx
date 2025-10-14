'use client';
import React from 'react';

interface OptimizedImageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function OptimizedImage({ children, className = '' }: OptimizedImageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}