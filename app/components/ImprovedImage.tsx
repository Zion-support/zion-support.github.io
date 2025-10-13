import React from 'react';

interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedImage({ className = '', children, ...props }: ImprovedImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
