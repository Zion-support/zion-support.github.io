import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEO({ className = '', children, ...props }: EnhancedSEOProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
