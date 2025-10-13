import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEO({ className = '', children }: EnhancedSEOProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}