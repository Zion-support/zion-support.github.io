import React from 'react';

interface SeoProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seo({ className = '', children }: SeoProps) {
  return (
    <div className={`SEO-component ${className}`}>
      {children}
    </div>
  );
}