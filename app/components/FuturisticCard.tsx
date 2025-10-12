'use client';

import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  price?: string;
  features?: string[];
  className?: string;
}

export default function FuturisticCard({ 
  title, 
  description, 
  icon, 
  link, 
  price,
  features = [],
  className = '' 
}: FuturisticCardProps) {
  return (
    <Link 
      to={link} 
      className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden h-full flex flex-col ${className}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 transition-colors duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Icon with glow effect */}
        <div className="mb-4 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">{icon}</div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-4 text-sm">
          {description}
        </p>
        
        {/* Price */}
        {price && (
          <div className="mb-4">
            <span className="text-2xl font-bold text-cyan-400">{price}</span>
          </div>
        )}
        
        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-cyan-300 transition-colors"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        {/* CTA */}
        <div className="mt-auto pt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span className="text-sm font-medium">Learn More</span>
          <div className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Animated corner accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}