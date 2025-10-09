'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'pink' | 'blue' | 'green' | 'orange';
  features: string[];
  price?: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  icon,
  color,
  features,
  price,
  isPopular = false,
  onSelect
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    cyan: {
      bg: 'from-cyan-500/20 to-cyan-600/20',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      button: 'bg-cyan-500 hover:bg-cyan-600'
    },
    pink: {
      bg: 'from-pink-500/20 to-pink-600/20',
      border: 'border-pink-500/30',
      text: 'text-pink-400',
      button: 'bg-pink-500 hover:bg-pink-600'
    },
    blue: {
      bg: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      button: 'bg-blue-500 hover:bg-blue-600'
    },
    green: {
      bg: 'from-green-500/20 to-green-600/20',
      border: 'border-green-500/30',
      text: 'text-green-400',
      button: 'bg-green-500 hover:bg-green-600'
    },
    orange: {
      bg: 'from-orange-500/20 to-orange-600/20',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      button: 'bg-orange-500 hover:bg-orange-600'
    }
  };

  const currentColor = colorClasses[color];

  return (
    <div
      className={`
        relative group cursor-pointer transition-all duration-500 transform
        ${isHovered ? 'scale-105' : 'scale-100'}
        ${isPopular ? 'ring-2 ring-cyan-400/50' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}
      
      <div
        className={`
          relative overflow-hidden rounded-2xl p-8 h-full
          bg-gradient-to-br ${currentColor.bg}
          border ${currentColor.border}
          backdrop-blur-sm
          ${isHovered ? 'shadow-2xl shadow-cyan-500/20' : 'shadow-lg'}
        `}
      >
        {/* Animated background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`${currentColor.text} mb-6`}>
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 text-center leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <CheckCircle className={`w-5 h-5 mr-3 ${currentColor.text} flex-shrink-0`} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          {price && (
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-white">{price}</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
          )}

          {/* CTA Button */}
          <button
            className={`
              w-full py-4 px-6 rounded-xl font-bold text-white
              ${currentColor.button}
              transition-all duration-300
              flex items-center justify-center
              group-hover:shadow-lg group-hover:shadow-cyan-500/25
            `}
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuturisticServiceCard;