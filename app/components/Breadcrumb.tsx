import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
