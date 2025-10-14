'use client';
import React from 'react';

interface SEOProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SEO({ children, className = '' }: SEOProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}