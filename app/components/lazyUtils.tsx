import React from 'react';

interface lazyUtilsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function lazyUtils({ className = '', children }: lazyUtilsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
