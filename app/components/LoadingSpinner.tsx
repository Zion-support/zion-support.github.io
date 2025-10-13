import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({ className = '', children, ...props }: LoadingSpinnerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
