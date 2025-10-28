import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children }) => {
  return (
    <div className={`breadcrumb-component ${className}`}>
{children || <h2>Breadcrumb</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;