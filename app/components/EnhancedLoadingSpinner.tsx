import React from 'react';

interface EnhancedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedLoadingSpinner({ className = '', children, ...props }: EnhancedLoadingSpinnerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
