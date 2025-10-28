import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = '', children }) => {
  return (
<div className={`servicecard-component ${className}`}>
      {children || <h2>ServiceCard</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';export default ServiceCard;