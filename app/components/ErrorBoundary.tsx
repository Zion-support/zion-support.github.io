'use client';
import React from 'react';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ErrorBoundary({ children, className = '' }: ErrorBoundaryProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}