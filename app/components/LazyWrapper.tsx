'use client';
import React from 'react';

interface LazyWrapperProps {
  children?: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

export default function LazyWrapper({ children, className = '' }: LazyWrapperProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}