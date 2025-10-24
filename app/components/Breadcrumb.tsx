import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'breadcrumb ' + className}>
      {children || <p>Breadcrumb component</p>}
    </div>
  );
};

export default Breadcrumb;
