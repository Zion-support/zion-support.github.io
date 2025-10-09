'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  price: string;
  popular?: boolean;
  onSelect: () => void;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  price,
  popular = false,
  onSelect
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        popular ? 'ring-2 ring-cyan-400' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 h-full flex flex-col hover:border-cyan-400/40 transition-all duration-300">
        {/* Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
          <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-auto">
          <div className="text-2xl font-bold text-white mb-2">
            {price}
          </div>
          <div className="text-sm text-gray-400">
            per month
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticServiceCard;