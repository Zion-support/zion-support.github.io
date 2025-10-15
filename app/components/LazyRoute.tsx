import React from 'react';

interface LazyrouteProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lazyroute({ className = '', children }: LazyrouteProps) {
  return (
    <div className={`LazyRoute-component ${className}`}>
      {children}
    </div>
  );
}