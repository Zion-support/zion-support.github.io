import React from 'react';
import { Card } from './ui/card';

interface ServiceCardProps {
  title: string,
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  className = ''
}) => {
  return (
    <Card className={`h-full ${className}`}>
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>  )
};
export default ServiceCard;
