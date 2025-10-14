'use client';
import React from 'react';

interface MetaManagerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MetaManager({ children, className = '' }: MetaManagerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}