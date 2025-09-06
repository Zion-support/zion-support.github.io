import React from 'react';

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesSection;