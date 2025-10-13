
import React from 'react';

interface EnhancedloadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedloading({ className = '', children, ...props }: EnhancedloadingProps) {
  return (
    <div className={`enhancedloading-component ${className}`} {...props}>
      {children}
    </div>
  );
}

