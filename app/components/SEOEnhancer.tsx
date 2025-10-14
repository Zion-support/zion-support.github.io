'use client';
import React from 'react';

interface SEOEnhancerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SEOEnhancer({ children, className = '' }: SEOEnhancerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}