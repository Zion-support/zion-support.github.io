import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveContainer({ className = '', children, ...props }: ResponsiveContainerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
