'use client';
import React from 'react';

interface ResponsiveTextProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ResponsiveText({ children, className = '' }: ResponsiveTextProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}