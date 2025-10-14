'use client';
import React from 'react';

interface EnhancedSkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedSkipLink({ children, className = '' }: EnhancedSkipLinkProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}