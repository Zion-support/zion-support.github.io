'use client';
import React from 'react';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEO({ title, description, keywords, children }: EnhancedSEOProps) {
  return (
    <div className="enhanced-seo">
      {children}
    </div>
  );
}
