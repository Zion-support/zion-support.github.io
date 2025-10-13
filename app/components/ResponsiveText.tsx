import React from 'react';

interface ResponsiveTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveText({ className = '', children, ...props }: ResponsiveTextProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
