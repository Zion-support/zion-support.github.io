'use client';
import React from 'react';

interface ErrorFallbackProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ErrorFallback({ children, className = '' }: ErrorFallbackProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}