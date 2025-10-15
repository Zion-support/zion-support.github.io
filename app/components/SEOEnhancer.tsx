import React from 'react';

interface SeoenhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seoenhancer({ className = '', children }: SeoenhancerProps) {
  return (
    <div className={`SEOEnhancer-component ${className}`}>
      {children}
    </div>
  );
}