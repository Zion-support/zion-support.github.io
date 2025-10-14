'use client';
import React from 'react';

interface BlogPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function BlogPage({ children, className = '' }: BlogPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}