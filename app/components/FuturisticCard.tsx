import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface FuturisticCardProps {
  title: string;
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  href: string;
  gradient: string;
  color: string;
  isPopular?: boolean;
  isNew?: boolean;
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  title,
  description,
  features,
  pricing,
  href,
  gradient,
  color,
  isPopular = false,
  isNew = false,
  className = ''
}) => {
  return (
    <div className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Badges */}
      <div className="flex gap-2 mb-4">
        {isPopular && (
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
            Popular
          </span>
        )}
        {isNew && (
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full">
            New
          </span>
        )}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300 text-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
            <span>{feature}</span>
          </li>
        ))}
        {features.length > 4 && (
          <li className="text-gray-400 text-sm">
            +{features.length - 4} more features
          </li>
        )}
      </ul>

      {/* Pricing */}
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-2">Starting from</div>
        <div className="text-3xl font-bold text-white">
          ${pricing.starter}
          <span className="text-lg text-gray-400 font-normal">/month</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={href}
        className={`inline-flex items-center gap-2 text-${color}-400 hover:text-${color}-300 font-semibold group-hover:gap-3 transition-all duration-300`}
      >
        Learn More
        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default FuturisticCard;