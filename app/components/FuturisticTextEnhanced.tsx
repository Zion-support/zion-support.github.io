'use client';
import React from 'react';

interface FuturisticTextEnhancedProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticTextEnhanced({ children, className = '' }: FuturisticTextEnhancedProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}