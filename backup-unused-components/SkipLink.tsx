import React from 'react';

interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SkipLink({ className = '', children }: SkipLinkProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}