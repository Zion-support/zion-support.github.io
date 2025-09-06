import React from 'react';

interface ServiceCardProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceCard;