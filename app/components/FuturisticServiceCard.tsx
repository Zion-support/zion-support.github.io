'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: 'purple' | 'cyan' | 'pink' | 'blue' | 'green' | 'orange';
  href: string;
  popular?: boolean;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  price,
  features,
  icon: Icon,
  color,
  href,
  popular = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
      gradient: 'from-purple-500 to-cyan-500',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-500/50',
      shadow: 'shadow-purple-500/20'
    },
    cyan: {
      gradient: 'from-cyan-500 to-blue-500',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      hover: 'hover:border-cyan-500/50',
      shadow: 'shadow-cyan-500/20'
    },
    pink: {
      gradient: 'from-pink-500 to-purple-500',
      text: 'text-pink-400',
      border: 'border-pink-500/30',
      hover: 'hover:border-pink-500/50',
      shadow: 'shadow-pink-500/20'
    },
    blue: {
      gradient: 'from-blue-500 to-indigo-500',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      hover: 'hover:border-blue-500/50',
      shadow: 'shadow-blue-500/20'
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      text: 'text-green-400',
      border: 'border-green-500/30',
      hover: 'hover:border-green-500/50',
      shadow: 'shadow-green-500/20'
    },
    orange: {
      gradient: 'from-orange-500 to-red-500',
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      hover: 'hover:border-orange-500/50',
      shadow: 'shadow-orange-500/20'
    }
  };

  const currentColor = colorClasses[color];

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 transform ${
        popular ? 'scale-105' : 'hover:scale-105'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`glass rounded-2xl p-8 border transition-all duration-500 ${
          popular ? currentColor.border : 'border-white/10'
        } ${currentColor.hover} ${
          isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'
        }`}
      >
        {/* Icon */}
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
              isHovered ? 'neon-cyan' : ''
            }`}
          >
            <Icon className="w-8 h-8 text-white" />
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
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
              : `border border-${color}-500 text-${color}-300 hover:bg-${color}-500/20`
          } flex items-center justify-center group`}
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