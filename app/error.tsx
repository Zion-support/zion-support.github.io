'use client';
import React from 'react';

interface ErrorProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Error({ children, className = '' }: ErrorProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}