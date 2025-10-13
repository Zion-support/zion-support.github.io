import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedLoading({ className = '', children, ...props }: EnhancedLoadingProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
