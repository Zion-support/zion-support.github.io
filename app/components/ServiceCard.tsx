'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  price?: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  price,
  isPopular = false,
  onSelect
}) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow ${
      isPopular ? 'ring-2 ring-blue-500' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        {price && (
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {price}
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {onSelect && (
        <button
          onClick={onSelect}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            isPopular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Select Service
          <ArrowRight className="inline-block ml-2 h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ServiceCard;