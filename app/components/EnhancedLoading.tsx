'use client';
import React from 'react';

interface EnhancedLoadingProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedLoading({ children, className = '' }: EnhancedLoadingProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}