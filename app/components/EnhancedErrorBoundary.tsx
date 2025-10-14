'use client';
import React from 'react';

interface EnhancedErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedErrorBoundary({ children, className = '' }: EnhancedErrorBoundaryProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}