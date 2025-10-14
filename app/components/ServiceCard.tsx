'use client';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  price?: string;
  className?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  price,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className="text-blue-600 text-3xl mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {price && (
        <div className="text-2xl font-bold text-blue-600">
          {price}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;