'use client';
import React from 'react';

interface EnhancedServicesShowcaseProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedServicesShowcase({ children, className = '' }: EnhancedServicesShowcaseProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}