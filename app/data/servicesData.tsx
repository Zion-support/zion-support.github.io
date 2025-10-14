'use client';
import React from 'react';

interface ServicesDataProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServicesData({ children, className = '' }: ServicesDataProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}