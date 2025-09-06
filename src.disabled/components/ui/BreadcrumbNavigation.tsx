import React from 'react';

interface BreadcrumbNavigationProps {
  className?: string;
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BreadcrumbNavigation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BreadcrumbNavigation;