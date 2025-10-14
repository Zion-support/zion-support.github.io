'use client';
import React from 'react';

interface EnhancedLoadingSpinnerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedLoadingSpinner({ children, className = '' }: EnhancedLoadingSpinnerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}