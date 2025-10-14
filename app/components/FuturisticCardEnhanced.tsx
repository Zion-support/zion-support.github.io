'use client';
import React from 'react';

interface FuturisticCardEnhancedProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticCardEnhanced({ children, className = '' }: FuturisticCardEnhancedProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}