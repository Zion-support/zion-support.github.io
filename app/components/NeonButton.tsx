'use client';
import React from 'react';

interface NeonButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NeonButton({ children, className = '' }: NeonButtonProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}