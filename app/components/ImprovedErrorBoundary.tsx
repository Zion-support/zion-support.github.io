'use client';
import React from 'react';

interface ImprovedErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ImprovedErrorBoundary({ children, className = '' }: ImprovedErrorBoundaryProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}