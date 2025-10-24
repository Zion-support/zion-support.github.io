'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  price,
  isPopular = false,
  onSelect
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${isPopular ? 'ring-2 ring-purple-400' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-3xl font-bold text-white mb-2">{price}</div>
        <p className="text-gray-400 text-sm">per month</p>
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
          isPopular
            ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
            : 'border border-white text-white hover:bg-white hover:text-gray-900'
        }`}
      >
        Select Plan
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;