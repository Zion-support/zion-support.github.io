import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyImage({ className = '', children, ...props }: LazyImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
