'use client';

import React from 'react';
import { CheckCircle, Star, Users, ArrowRight, Zap, Shield, Clock, TrendingUp } from 'lucide-react';

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  popular: boolean;
  new: boolean;
  rating: number;
  users: number;
  link: string;
  demo: string;
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  integrations: string[];
  support: string[];
}

interface MicroSAASCardProps {
  service: MicroSAASService;
  onSelect: (service: MicroSAASService) => void;
  className?: string;
}

export default function MicroSAASCard({ service, onSelect, className = '' }: MicroSAASCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`quantum-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${isHovered ? 'energy-pulse' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      {/* Header with Icon and Badges */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className={`w-8 h-8 ${service.color}`} />
        </div>
        <div className="flex space-x-2">
          {service.popular && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full animate-pulse">
              POPULAR
            </span>
          )}
          {service.new && (
            <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold rounded-full">
              NEW
            </span>
          )}
        </div>
      </div>

      {/* Service Name and Description */}
      <h3 className="text-xl font-bold text-white mb-2 neon-text group-hover:text-cyan-400 transition-colors duration-300">
        {service.name}
      </h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {service.description}
      </p>

      {/* Rating and Users */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{service.rating}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-cyan-400" />
          <span className="text-gray-300 text-sm">{service.users.toLocaleString()}+ users</span>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
              {feature}
            </span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-xs text-cyan-400 font-medium">
            +{service.features.length - 3} more features
          </div>
        )}
      </div>

      {/* Pricing and CTA */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
          {service.price}
        </div>
        <button className="cyber-button px-4 py-2 text-sm group-hover:scale-105 transition-transform duration-300">
          Try Free
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-300" />
    </div>
  );
}