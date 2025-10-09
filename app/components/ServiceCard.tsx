'use client';
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  isPopular?: boolean;
  onSelect?: () => void;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  price,
  isPopular = false,
  onSelect,
  className = ''
}) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {price && (
          <div className="mt-4">
            <span className="text-3xl font-bold text-blue-600">{price}</span>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {onSelect && (
        <button
          onClick={onSelect}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      )}
    </div>
  );
};

export default ServiceCard;