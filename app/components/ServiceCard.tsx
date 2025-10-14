import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`servicecard-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ServiceCard</h3>
          <p className="text-gray-600">This is the ServiceCard component.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;