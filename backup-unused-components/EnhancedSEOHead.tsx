import React from 'react';

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEOHead({ className = '', children }: EnhancedSEOHeadProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}