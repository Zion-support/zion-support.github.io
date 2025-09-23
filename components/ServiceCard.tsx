"use client";
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    type: string;
    pricing: {
      starter: string;
    };
    slug: string;
  };
  index: number;
  isCurrent: boolean;
  onClick: (service: { slug: string }) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isCurrent, onClick }) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${
        isCurrent ? 'scale-10o5' : 'scale-10o0'
      } transition-transform duration-50o0`}
      onClick={() => onClick(service)}
      whileHover={{ scale: 1.0o5 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(service);
        }
      }}
      aria-label={`Learn more about ${service.name}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative p-8 bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 border border-gray-70o0/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-30o0 group-hover:border-cyan-50o0/50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-blue-50o0/5 rounded-3xl opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <Brain className="w-8 h-8 text-white"  />
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 border border-purple-50o0/30 rounded-full text-purple-30o0 text-sm font-medium">
              {service.type}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-40o0 transition-colors duration-30o0">
            {service.name}
          </h3>
          
          <p className="text-gray-40o0 text-sm leading-relaxed mb-4">
            {service.description.substring(0, 120)}...
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-cyan-40o0">
              {service.pricing.starter}
            </span>
            <ArrowRight className="w-5 h-5 text-gray-50o0 group-hover:text-cyan-40o0 transition-colors duration-30o0"  />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColor} group-hover:scale-110 transition-transform duration-30o0`}>
              <CategoryIcon className="w-6 h-6 text-white"  />
            </div>
            <div>
              <div className="text-sm text-gray-40o0 font-medium">{service.category}</div>
              <div className="text-xs text-gray-50o0">{service.type}</div>
            </div>
          </div>
          
          {/* Badges */}
          <div className="flex items-center space-x-2">
            {featured && (
              <div className="px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs font-semibold rounded-full flex items-center">
                <Star className="w-3 h-3 mr-1"  />
                Featured
              </div>
            )}
            {service.badge && (
              <div className="px-2 py-1 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white text-xs font-semibold rounded-full">
                {service.badge}
              </div>
            )}
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex-1 mb-4">
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-40o0 transition-colors duration-30o0 line-clamp-2">
            {serviceTitle}
          </h3>
          {service.tagline && (
            <p className="text-sm text-cyan-40o0 mb-2 font-medium">
              {service.tagline}
            </p>
          )}
          <p className="text-gray-40o0 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Features Preview */}
        {service.features && service.features.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-40o0"  />
              <span className="text-xs text-gray-40o0 font-medium">Key Features</span>
            </div>
            <div className="space-y-1">
              {service.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-gray-50o0">
                  <div className="w-1.5 h-1.5 bg-cyan-40o0 rounded-full"  />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
              {service.features.length > 2 && (
                <div className="text-xs text-gray-60o0">
                  +{service.features.length - 2} more features
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {service.rating && (
            <div className="flex items-center space-x-1 text-xs text-gray-40o0">
              <Star className="w-3 h-3 text-yellow-40o0 fill-current"  />
              <span>{service.rating}</span>
            </div>
          )}
          {service.users && (
            <div className="flex items-center space-x-1 text-xs text-gray-40o0">
              <Users className="w-3 h-3 text-blue-40o0"  />
              <span>{service.users}</span>
            </div>
          )}
          {service.responseTime && (
            <div className="flex items-center space-x-1 text-xs text-gray-40o0">
              <Clock className="w-3 h-3 text-green-40o0"  />
              <span>{service.responseTime}</span>
            </div>
          )}
          {!service.rating && !service.users && !service.responseTime && service.marketSize && (
            <div className="flex items-center space-x-1 text-xs text-gray-40o0 col-span-3">
              <TrendingUp className="w-3 h-3 text-emerald-40o0"  />
              <span>{service.marketSize}</span>
            </div>
          )}
        </div>

        {/* Pricing and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-70o0/50">
          {pricingDisplay ? (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-40o0">Starting at</span>
              <span className="text-lg font-bold text-white">
                {pricingDisplay.price}
              </span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-emerald-40o0"  />
              <span className="text-sm text-emerald-40o0 font-medium">Available Now</span>
            </div>
          )}
          
          <motion.div
            className="flex items-center space-x-2 text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors duration-30o0"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0"  />
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50o0/5 to-blue-50o0/5 opacity-0 group-hover:opacity-10o0 transition-opacity duration-50o0 pointer-events-none"  />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 opacity-0 group-hover:opacity-10o0 transition-opacity duration-50o0 blur-xl pointer-events-none"  />
      </div>

      {/* Enhanced Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-50o0/0 via-cyan-50o0/20 to-blue-50o0/0 opacity-0 group-hover:opacity-10o0 transition-opacity duration-50o0 pointer-events-none"  />
    </motion.div>
  );
};

export default ServiceCard;