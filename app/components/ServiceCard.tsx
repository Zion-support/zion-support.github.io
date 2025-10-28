'use client';

import React, { memo } from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`service-card ${className}`}>
      {children}
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;