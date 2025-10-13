import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children, ...props }: ImprovedErrorBoundaryProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
