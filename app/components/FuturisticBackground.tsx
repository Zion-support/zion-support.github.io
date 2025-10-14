'use client';
import React from 'react';

interface FuturisticBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticBackground({ children, className = '' }: FuturisticBackgroundProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}