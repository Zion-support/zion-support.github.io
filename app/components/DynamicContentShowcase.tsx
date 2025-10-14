'use client';
import React from 'react';

interface DynamicContentShowcaseProps {
  children?: React.ReactNode;
  className?: string;
}

export default function DynamicContentShowcase({ children, className = '' }: DynamicContentShowcaseProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}