import React from 'react';

interface UnifiedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function UnifiedSEOHead({ className = '', children }: UnifiedSEOHeadProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
