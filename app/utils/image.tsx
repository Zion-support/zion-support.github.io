import React from 'react';

interface ImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Image({ className = '', children }: ImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}