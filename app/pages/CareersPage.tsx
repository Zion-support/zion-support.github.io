'use client';
import React from 'react';

interface CareersPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CareersPage({ children, className = '' }: CareersPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}