'use client';
import React from 'react';

interface GlobalErrorProps {
  children?: React.ReactNode;
  className?: string;
}

export default function GlobalError({ children, className = '' }: GlobalErrorProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}