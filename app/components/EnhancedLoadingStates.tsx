'use client';
import React from 'react';

interface EnhancedLoadingStatesProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedLoadingStates({ children, className = '' }: EnhancedLoadingStatesProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}