'use client';
import React from 'react';

interface LoadingProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Loading({ children, className = '' }: LoadingProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}