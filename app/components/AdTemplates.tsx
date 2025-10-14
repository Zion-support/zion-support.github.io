'use client';
import React from 'react';

interface AdTemplatesProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdTemplates({ children, className = '' }: AdTemplatesProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}