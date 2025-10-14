'use client';
import React from 'react';

interface CloudSolutionsPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CloudSolutionsPage({ children, className = '' }: CloudSolutionsPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}