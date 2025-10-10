import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children }) => {
  return (
    <div className={`breadcrumb-component ${className}`}>
      {children}
    </div>
  );
};

export default Breadcrumb;