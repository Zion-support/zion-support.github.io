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
      className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        {isHovered && (
          <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
        )}
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {price && (
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-white">{price}</div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="text-sm text-gray-400 ml-2">4.9/5</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default FuturisticServiceCard;
