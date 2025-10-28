import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`servicecard-component ${className}`}>
      {children}
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
