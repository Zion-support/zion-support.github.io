'use client';
import React from 'react';

interface EnhancedSEOProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedSEO({ children, className = '' }: EnhancedSEOProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}