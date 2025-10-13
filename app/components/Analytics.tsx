import React from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Analytics({ className = '', children, ...props }: AnalyticsProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
