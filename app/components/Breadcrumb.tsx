import React from 'react';

interface BreadcrumbProps {
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Breadcrumb;
