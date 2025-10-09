'use client';
import React, { memo } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  price?: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({
  title,
  description,
  icon: Icon,
  features,
  price,
  isPopular = false,
  onSelect
}) => {
  return (
    <div
      className={`
        relative group cursor-pointer transition-all duration-300 transform hover:scale-105
        ${isPopular ? 'ring-2 ring-cyan-400/50' : ''}
      `}
      onClick={onSelect}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:border-cyan-400/50 transition-colors">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-cyan-500/20">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">
            {title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-3 mb-8 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <ArrowRight className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          {price && (
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-white">{price}</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
          )}
          
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 px-6 rounded-xl font-bold transition-colors flex items-center justify-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;