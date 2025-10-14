'use client';
import React from 'react';

interface SupportPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SupportPage({ children, className = '' }: SupportPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}