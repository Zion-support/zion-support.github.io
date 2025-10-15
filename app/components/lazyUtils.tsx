import React from 'react';

interface LazyutilsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lazyutils({ className = '', children }: LazyutilsProps) {
  return (
    <div className={`lazyUtils-component ${className}`}>
      {children}
    </div>
  );
}