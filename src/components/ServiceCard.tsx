import React from 'react';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  price,
  className = ''
}) => {
  return (
    <Card className={`h-full ${className}`}>
      {icon && (
        <div className="text-4xl mb-4 text-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {price && (
        <div className="text-2xl font-bold text-blue-400 text-center">
          {price}
        </div>
      )}
    </Card>
  );
};

export default ServiceCard;