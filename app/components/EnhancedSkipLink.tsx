import React from 'react';

interface EnhancedskiplinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedskiplink({ className = '', children }: EnhancedskiplinkProps) {
  return (
    <div className={`EnhancedSkipLink-component ${className}`}>
      {children}
    </div>
  );
}