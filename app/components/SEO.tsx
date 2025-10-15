import React from 'react';

interface SEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEO({ className = '', children }: SEOProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
