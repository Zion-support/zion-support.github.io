'use client';
import React from 'react';

interface ImprovedFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ImprovedFooter({ children, className = '' }: ImprovedFooterProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}