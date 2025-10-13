import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorFallback({ className = '', children, ...props }: ErrorFallbackProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
