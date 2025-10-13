import React from 'react';

interface imageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function image({ className = '', children }: imageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}