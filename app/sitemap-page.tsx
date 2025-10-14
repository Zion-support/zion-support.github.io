'use client';
import React from 'react';

interface SitemapPageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SitemapPage({ children, className = '' }: SitemapPageProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}