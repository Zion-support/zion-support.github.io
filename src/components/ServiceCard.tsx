import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;

<<<<<<< HEAD
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  className = '' 
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>

    </div>
=======
        </div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>

>>>>>>> origin/merged-prs
  );
};

export default ServiceCard;