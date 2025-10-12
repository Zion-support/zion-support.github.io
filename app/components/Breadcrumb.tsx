import React from 'react';

interface BreadcrumbProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Breadcrumb({ children, className = '' }: BreadcrumbProps) {
  return (
    <div className={`breadcrumb ${className}`}>
      {children || <div>Breadcrumb Component</div>}
    </div>
  );
}