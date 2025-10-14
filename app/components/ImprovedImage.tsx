'use client';
import React from 'react';

interface ImprovedImageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ImprovedImage({ children, className = '' }: ImprovedImageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}