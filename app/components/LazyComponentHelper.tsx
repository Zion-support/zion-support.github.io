import React from 'react';

interface LazyComponentHelperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyComponentHelper({ className = '', children }: LazyComponentHelperProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
