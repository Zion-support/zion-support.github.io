import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loading({ className = '', children, ...props }: LoadingProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
