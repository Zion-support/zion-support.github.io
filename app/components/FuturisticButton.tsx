'use client';
import React from 'react';

interface FuturisticButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticButton({ children, className = '' }: FuturisticButtonProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}