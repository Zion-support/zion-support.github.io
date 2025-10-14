'use client';
import React from 'react';

interface TermsPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TermsPage({ children, className = '' }: TermsPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}