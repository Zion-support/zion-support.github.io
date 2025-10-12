import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  className?: string;
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  className = ''
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 group hover:scale-105 transition-transform ${className}`}>
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-cyan-400 mr-3" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuturisticServiceCard;