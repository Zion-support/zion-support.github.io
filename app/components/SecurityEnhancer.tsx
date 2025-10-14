'use client';
import React from 'react';

interface SecurityEnhancerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SecurityEnhancer({ children, className = '' }: SecurityEnhancerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}