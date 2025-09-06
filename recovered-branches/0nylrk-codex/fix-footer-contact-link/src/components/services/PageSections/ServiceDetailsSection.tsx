import React from 'react';

interface ServiceDetailsSectionProps {
  className?: string;
}

const ServiceDetailsSection: React.FC<ServiceDetailsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceDetailsSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceDetailsSection;