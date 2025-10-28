import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children }) => {
  return (
    <div className={`breadcrumb-component ${className}`}>
{children || <h2>Breadcrumb</h2>}
    </div>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;