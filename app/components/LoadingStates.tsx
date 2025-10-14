'use client';
import React from 'react';

interface LoadingStatesProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LoadingStates({ children, className = '' }: LoadingStatesProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}