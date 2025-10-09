'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  isPopular?: boolean;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
ures: string[];
  price?: string;
  isPopular?: boolean;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;

}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  features,
  price,
  isPopular = false,
  icon,
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className={`
        relative bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-full
        transition-all duration-300
        ${isHovered ? 'shadow-2xl border-blue-300' : ''}
        ${isPopular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
      `}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 bg-blue-100 rounded-lg">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          {isHovered && (
            <ArrowRight className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {price && (
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl font-bold text-gray-900">{price}</div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">AI Powered</span>
            </div>
          </div>
        )}

        <div className="mt-auto">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuturisticServiceCard;