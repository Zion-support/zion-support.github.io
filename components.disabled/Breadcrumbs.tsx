import React from 'react';

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Breadcrumbs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Breadcrumbs;