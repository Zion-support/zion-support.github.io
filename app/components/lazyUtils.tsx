'use client';
import React from 'react';

interface LazyUtilsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LazyUtils({ children, className = '' }: LazyUtilsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}