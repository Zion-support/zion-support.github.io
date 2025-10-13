import React from 'react';

interface CriticalResourcePreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CriticalResourcePreloader({ className = '', children, ...props }: CriticalResourcePreloaderProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
