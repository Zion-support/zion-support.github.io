import React from 'react';

interface LazyimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lazyimage({ className = '', children }: LazyimageProps) {
  return (
    <div className={`LazyImage-component ${className}`}>
      {children}
    </div>
  );
}