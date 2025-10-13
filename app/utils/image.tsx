// Image utility component
import React from 'react';

interface ImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Image({ className = '', children, ...props }: ImageProps) {
  return (
    <div className={`image-component ${className}`} {...props}>
      {children}
    </div>
  );
}
