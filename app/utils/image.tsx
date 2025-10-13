<<<<<<< HEAD
import React from 'react';
=======
// Image utility component
>>>>>>> cursor/fix-errors-and-merge-to-main-31f8

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
