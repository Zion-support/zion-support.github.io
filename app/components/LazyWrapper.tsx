import React from 'react';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function LazyWrapper({ children, fallback }: LazyWrapperProps) {
  return (
    <div>
      {children}
    </div>
  );
};

export default LazyWrapper;
