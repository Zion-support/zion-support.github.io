'use client';
import React from 'react';

interface CriticalResourcePreloaderProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CriticalResourcePreloader({ children, className = '' }: CriticalResourcePreloaderProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}