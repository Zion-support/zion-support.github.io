'use client';
import React from 'react';

interface ServicesProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Services({ children, className = '' }: ServicesProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}