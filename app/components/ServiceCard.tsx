import React from 'react';

interface ServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`service-card ${className}`}>
      {children || (
        <div className="p-4">
          <h2>ServiceCard</h2>
          <p>Component implementation coming soon...</p>
        </div>
      )}
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';

const ServiceCard = () => {
  return (
    <div className="p-4">
      <h2>ServiceCard</h2>
      <p>Component implementation coming soon...</p>
    </div>
  );
};

export default ServiceCard;
