import React from 'react';

interface BreadcrumbJsonLdProps {
  className?: string;
}

const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BreadcrumbJsonLd</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BreadcrumbJsonLd;