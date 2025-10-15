import React from 'react';

interface SeoauditProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seoaudit({ className = '', children }: SeoauditProps) {
  return (
    <div className={`SEOAudit-component ${className}`}>
      {children}
    </div>
  );
}