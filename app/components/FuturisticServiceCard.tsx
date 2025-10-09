'use client';
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
<<<<<<< HEAD
  features: string[];
  price?: string;
  popular?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
=======
  icon: React.ComponentType<any>;
  features: string[];
  price: string;
  popular?: boolean;
  onSelect: () => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
<<<<<<< HEAD
  features,
  price,
  popular = false,
  icon: Icon,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 transform ${
=======
  icon: Icon,
  features,
  price,
  popular = false,
  onSelect
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
      gradient: 'from-purple-500 to-purple-700',
      hover: 'hover:from-purple-600 hover:to-purple-800',
      shadow: 'shadow-purple-500/25',
      text: 'text-purple-400'
    },
    cyan: {
      gradient: 'from-cyan-500 to-cyan-700',
      hover: 'hover:from-cyan-600 hover:to-cyan-800',
      shadow: 'shadow-cyan-500/25',
      text: 'text-cyan-400'
    },
    blue: {
      gradient: 'from-blue-500 to-blue-700',
      hover: 'hover:from-blue-600 hover:to-blue-800',
      shadow: 'shadow-blue-500/25',
      text: 'text-blue-400'
    },
    green: {
      gradient: 'from-green-500 to-green-700',
      hover: 'hover:from-green-600 hover:to-green-800',
      shadow: 'shadow-green-500/25',
      text: 'text-green-400'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-700',
      hover: 'hover:from-orange-600 hover:to-orange-800',
      shadow: 'shadow-orange-500/25',
      text: 'text-orange-400'
    }
  };

  const colors = Object.keys(colorClasses) as Array<keyof typeof colorClasses>;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const currentColor = colorClasses[color];

  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-500 ${
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
<<<<<<< HEAD
      {/* Background with gradient */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/10 ${
        popular ? 'ring-2 ring-cyan-400/50' : ''
      }`}>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              {Icon && (
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                {popular && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                )}
              </div>
            </div>
            {price && (
              <div className="text-right">
                <div className="text-2xl font-bold text-cyan-400">{price}</div>
                <div className="text-sm text-gray-400">/month</div>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
=======
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 ${
          isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'
        }`}
      >
        {/* Icon */}
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
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
            <li className="flex items-center text-sm text-gray-400">
              <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
              +{features.length - 4} more features
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <button
          onClick={onSelect}
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
            popular
              ? `bg-gradient-to-r ${currentColor.gradient} text-white hover:shadow-lg ${currentColor.shadow}`
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
>>>>>>> cursor/fix-errors-and-merge-to-main-18a0
    </div>
  );
};

export default FuturisticServiceCard;