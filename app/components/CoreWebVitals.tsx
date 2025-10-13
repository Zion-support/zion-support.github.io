import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children, ...props }: CoreWebVitalsProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
