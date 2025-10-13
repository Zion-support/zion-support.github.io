import React from 'react';
interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
  return (
    <div className={`breadcrumb-component ${className}`} {...props}>
      {children}
    </div>
  );
}