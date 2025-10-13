import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
