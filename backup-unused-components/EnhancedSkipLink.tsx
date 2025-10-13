import React from 'react';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSkipLink({ className = '', children }: EnhancedSkipLinkProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}