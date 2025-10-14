'use client';
import React from 'react';

interface TeamPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TeamPage({ children, className = '' }: TeamPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}