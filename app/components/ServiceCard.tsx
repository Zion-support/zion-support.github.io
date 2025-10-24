'use client'
import React from 'react';

interface ServiceCardProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Service Card</h2>
      <p className="text-gray-600">This is a placeholder component for Service Card.</p>
    </div>
  );
};

export default ServiceCard;
