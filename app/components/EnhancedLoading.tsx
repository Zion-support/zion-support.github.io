import React from 'react';

interface EnhancedloadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedloading({ className = '', children }: EnhancedloadingProps) {
  return (
    <div className={`EnhancedLoading-component ${className}`}>
      {children}
    </div>
  );
}