import React from 'react';

interface ServicesCatalogProps {
  className?: string;
}

const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesCatalog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesCatalog;