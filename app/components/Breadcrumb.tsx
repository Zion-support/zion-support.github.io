import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children }: BreadcrumbProps) {
  return (
    <div className={`Breadcrumb-component ${className}`}>
      {children}
    </div>
  );
}