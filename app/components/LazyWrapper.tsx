import React, { ReactNode } from 'react';

interface LazyWrapperProps {
  children: ReactNode;
}

export default function LazyWrapper({ children }: LazyWrapperProps) {
  return (
    <div className="lazy-wrapper">
      {children}
    </div>
  );
}