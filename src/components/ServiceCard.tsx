import React from 'react';

interface ServiceCardProps {
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  className = ''
}) => {
  return (
    <div className={`servicecard ${className}`}>
      <h2>ServiceCard</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default ServiceCard;
