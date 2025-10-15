import React from 'react';

interface UnifiedseoheadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Unifiedseohead({ className = '', children }: UnifiedseoheadProps) {
  return (
    <div className={`UnifiedSEOHead-component ${className}`}>
      {children}
    </div>
  );
}