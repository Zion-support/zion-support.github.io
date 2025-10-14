'use client';
import React from 'react';

interface DemoPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function DemoPage({ children, className = '' }: DemoPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}