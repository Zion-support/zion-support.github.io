"use client";
import React from 'react';

interface ServiceCardProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ServiceCard
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ServiceCard;