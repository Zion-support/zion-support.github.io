import React from 'react';

interface LazyWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyWrapper({ className = '', children }: LazyWrapperProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}