import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'servicecard ' + className}>
      {children || <p>ServiceCard component</p>}
    </div>
  );
};

export default ServiceCard;
