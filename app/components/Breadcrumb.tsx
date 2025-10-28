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

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
cursor/fix-errors-and-merge-to-main-7271