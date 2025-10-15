import React from 'react';

interface LazyRouteProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyRoute({ className = '', children }: LazyRouteProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
