'use client';
import React from 'react';

interface EnhancedMetaTagsProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedMetaTags({ children, className = '' }: EnhancedMetaTagsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}