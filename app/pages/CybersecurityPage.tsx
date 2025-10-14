'use client';
import React from 'react';

interface CybersecurityPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CybersecurityPage({ children, className = '' }: CybersecurityPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}