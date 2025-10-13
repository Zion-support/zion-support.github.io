import React from 'react';

interface StructuredDataProps {
  className?: string;
  children?: React.ReactNode;
}

export default function StructuredData({ className = '', children, ...props }: StructuredDataProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
