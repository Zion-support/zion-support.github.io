'use client';

import React, { memo } from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <nav className={`breadcrumb ${className}`}>
      {children}
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;