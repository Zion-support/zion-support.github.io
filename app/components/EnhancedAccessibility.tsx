'use client';
import React from 'react';

interface EnhancedAccessibilityProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedAccessibility({ children, className = '' }: EnhancedAccessibilityProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}