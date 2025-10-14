'use client';
import React from 'react';

interface LoadingSpinnerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LoadingSpinner({ children, className = '' }: LoadingSpinnerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}