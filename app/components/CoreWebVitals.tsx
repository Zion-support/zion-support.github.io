'use client';
import React from 'react';

interface CoreWebVitalsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CoreWebVitals({ children, className = '' }: CoreWebVitalsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}