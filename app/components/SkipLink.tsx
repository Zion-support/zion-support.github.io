'use client';
import React from 'react';

interface SkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SkipLink({ children, className = '' }: SkipLinkProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}