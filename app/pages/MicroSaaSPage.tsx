'use client';
import React from 'react';

interface MicroSaaSPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MicroSaaSPage({ children, className = '' }: MicroSaaSPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}