'use client';
import React from 'react';

interface StructuredDataProps {
  children?: React.ReactNode;
  className?: string;
}

export default function StructuredData({ children, className = '' }: StructuredDataProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}