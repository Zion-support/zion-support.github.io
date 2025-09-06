import React from 'react';

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Breadcrumb</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Breadcrumb;