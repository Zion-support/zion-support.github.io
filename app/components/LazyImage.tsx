'use client';
import React from 'react';

interface LazyImageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LazyImage({ children, className = '' }: LazyImageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}