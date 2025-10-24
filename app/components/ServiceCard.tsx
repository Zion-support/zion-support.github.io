'use client';
import React from 'react';

interface ServiceCardProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ServiceCard</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ServiceCard;
