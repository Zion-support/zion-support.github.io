'use client';
import React from 'react';

interface SolutionsPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SolutionsPage({ children, className = '' }: SolutionsPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}