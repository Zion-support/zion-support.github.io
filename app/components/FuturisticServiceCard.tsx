'use client';

import React, { memo } from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    price?: string;
    features?: string[];
    category?: string;
    popular?: boolean;
    icon: React.ComponentType<any>;
    link: string;
  };
  isMicroSAAS?: boolean;
}

const FuturisticServiceCard = memo(({ service, isMicroSAAS = false }: ServiceCardProps) => {
  const IconComponent = service.icon;
  
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
      {service.popular && (
        <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          <Star className="w-4 h-4 inline mr-1" />
          Popular
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
          <IconComponent className="w-8 h-8 text-cyan-400" />
        </div>
        {isMicroSAAS && service.price && (
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
            <div className="text-sm text-gray-400">per month</div>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      {isMicroSAAS && service.features && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <a
        href={service.link}
        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
});

FuturisticServiceCard.displayName = 'FuturisticServiceCard';

export default FuturisticServiceCard;