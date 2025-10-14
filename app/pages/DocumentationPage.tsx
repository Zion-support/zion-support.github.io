'use client';
import React from 'react';

interface DocumentationPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function DocumentationPage({ children, className = '' }: DocumentationPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}