'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features?: string[];
  onClick?: () => void;
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features = [],
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`group relative bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/20 rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        {/* CTA */}
        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default FuturisticServiceCard;
