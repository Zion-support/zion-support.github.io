'use client';
import React from 'react';

interface NotFoundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NotFound({ children, className = '' }: NotFoundProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}