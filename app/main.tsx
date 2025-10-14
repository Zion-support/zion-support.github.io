'use client';
import React from 'react';

interface MainProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Main({ children, className = '' }: MainProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}