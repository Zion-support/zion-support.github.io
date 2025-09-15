import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EnhancedMarketplaceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  className?: string;
}

export default function EnhancedMarketplaceCard({ 
  title, 
  description, 
  href, 
  icon = '🚀',
  className = '' 
}: EnhancedMarketplaceCardProps) {
  return (
    <Link href={href} className={`block group ${className}`}>
      <div className="relative h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">{icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
            </div>
            <ArrowRight 
              size={20} 
              className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
            />
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {description}
          </p>
          
          {/* Bottom accent */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                Learn more
              </span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <ArrowRight size={16} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
}