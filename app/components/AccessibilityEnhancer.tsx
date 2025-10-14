'use client';
import React from 'react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AccessibilityEnhancer({ children, className = '' }: AccessibilityEnhancerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}