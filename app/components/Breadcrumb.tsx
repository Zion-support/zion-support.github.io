'use client';

import React from 'react';

interface BreadcrumbProps {
  children?: React.ReactNode;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Breadcrumb;