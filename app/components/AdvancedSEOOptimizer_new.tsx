import React from 'react';

interface Advancedseooptimizer_newProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Advancedseooptimizer_new({ className = '', children }: Advancedseooptimizer_newProps) {
  return (
    <div className={`AdvancedSEOOptimizer_new-component ${className}`}>
      {children}
    </div>
  );
}