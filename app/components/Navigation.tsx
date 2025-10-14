'use client';
import React from 'react';

interface NavigationProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Navigation({ children, className = '' }: NavigationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}