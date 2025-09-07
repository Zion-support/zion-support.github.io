import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  className = '',
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${className}`}>
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;