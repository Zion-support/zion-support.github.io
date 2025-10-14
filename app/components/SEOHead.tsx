'use client';
import React from 'react';

interface SEOHeadProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SEOHead({ children, className = '' }: SEOHeadProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}