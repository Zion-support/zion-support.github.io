'use client';
import React from 'react';

interface CaseStudiesPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CaseStudiesPage({ children, className = '' }: CaseStudiesPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}