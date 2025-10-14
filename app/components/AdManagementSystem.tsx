'use client';
import React from 'react';

interface AdManagementSystemProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdManagementSystem({ children, className = '' }: AdManagementSystemProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}