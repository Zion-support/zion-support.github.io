import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children }) => {
  return (
    <div className={`breadcrumb ${className}`}>
      {children}
    </div>
  );
};

export default Breadcrumb;