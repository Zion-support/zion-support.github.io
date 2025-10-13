import React from 'react';

interface OptimizedImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function OptimizedImage({ className = '', children, ...props }: OptimizedImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
