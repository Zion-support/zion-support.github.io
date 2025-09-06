import React from 'react';
<<<<<<< HEAD
import { Card } from './ui/card';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface ServiceCardProps {
  title: string;
  description: string;
<<<<<<< HEAD
  icon: string;
  features: string[];
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
<<<<<<< HEAD
  features,
  className = ''
}) => {
  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow duration-300 ${className}`} role="article" aria-labelledby={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-center">
        <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
        <h3 id={`service-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2" role="list">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-500 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" aria-hidden="true"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
=======
    </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
};

export default ServiceCard;