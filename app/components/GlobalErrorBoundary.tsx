'use client';
import React from 'react';

interface GlobalErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

export default function GlobalErrorBoundary({ children, className = '' }: GlobalErrorBoundaryProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}