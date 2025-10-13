import React from 'react';

interface ImprovedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedSEO({ className = '', children }: ImprovedSEOProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}