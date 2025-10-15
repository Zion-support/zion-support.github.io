import React from 'react';

interface SkiplinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Skiplink({ className = '', children }: SkiplinkProps) {
  return (
    <div className={`SkipLink-component ${className}`}>
      {children}
    </div>
  );
}