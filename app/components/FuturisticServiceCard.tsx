'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  features,
  price,
  isPopular = false,
  onSelect
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      hover: 'hover:from-purple-600 hover:to-purple-700',
      shadow: 'shadow-purple-500/25',
      text: 'text-purple-400'
    },
    cyan: {
      gradient: 'from-cyan-500 to-cyan-600',
      hover: 'hover:from-cyan-600 hover:to-cyan-700',
      shadow: 'shadow-cyan-500/25',
      text: 'text-cyan-400'
    },
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      hover: 'hover:from-blue-600 hover:to-blue-700',
      shadow: 'shadow-blue-500/25',
      text: 'text-blue-400'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      hover: 'hover:from-green-600 hover:to-green-700',
      shadow: 'shadow-green-500/25',
      text: 'text-green-400'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      hover: 'hover:from-orange-600 hover:to-orange-700',
      shadow: 'shadow-orange-500/25',
      text: 'text-orange-400'
    }
  };

  const color = 'purple'; // Default color
  const currentColor = colorClasses[color];

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 ${
          isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'
        }`}
      >
        {/* Icon */}
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Zap className="w-8 h-8 text-white" />
          </div>
          
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className={`text-3xl font-bold ${currentColor.text} mb-2`}>
            {price}
          </div>
          <div className="text-sm text-gray-400">per month</div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
          {features.length > 4 && (
            <li className="text-sm text-gray-400">
              +{features.length - 4} more features
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
            isPopular
              ? `bg-gradient-to-r ${currentColor.gradient} text-white hover:shadow-lg ${currentColor.shadow}`
              : `border border-${color}-500 text-${color}-300 hover:bg-${color}-500/20`
          } flex items-center justify-center group`}
          onClick={onSelect}
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Hover Effect Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
        ></div>
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      ></div>
    </div>
  );
};

export default FuturisticServiceCard;