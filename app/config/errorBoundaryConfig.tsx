'use client';
import React from 'react';

interface ErrorBoundaryConfigProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ErrorBoundaryConfig({ children, className = '' }: ErrorBoundaryConfigProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}