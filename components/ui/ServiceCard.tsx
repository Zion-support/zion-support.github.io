import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Clock, Shield, Zap } from 'lucide-react';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    link: string;
    category?: string;
    features?: string[];
    rating?: number;
    users?: number;
    trialDays?: number;
    price?: string;
    popular?: boolean;
  };
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

export default function ServiceCard({
  service,
  variant = 'default',
  className = ''
}: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const getCardClasses = () => {
    const base = 'group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer';
    
    switch (variant) {
      case 'featured':
        return `${base} border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl shadow-xl hover:shadow-2xl`;
      case 'minimal':
        return `${base} border-gray-200/20 bg-white/5 backdrop-blur-sm hover:bg-white/10`;
      default:
        return `${base} border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:bg-white/20`;
    }
  };

  const getIconClasses = () => {
    const base = 'text-4xl mb-4 transition-transform duration-300 group-hover:scale-110';
    
    switch (variant) {
      case 'featured':
        return `${base} text-blue-400`;
      case 'minimal':
        return `${base} text-gray-400`;
      default:
        return `${base} text-blue-400`;
    }
  };

  return (
    <motion.div
      className={`${getCardClasses()} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
            Popular
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          className={getIconClasses()}
        >
          {service.icon}
        </motion.div>

        {/* Category */}
        {service.category && (
          <div className="text-xs font-medium text-blue-400 mb-2 uppercase tracking-wider">
            {service.category}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Features */}
        {service.features && variant !== 'minimal' && (
          <div className="mb-4">
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stats Row */}
        {(service.rating || service.users || service.trialDays) && (
          <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
            {service.rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                {service.rating}
              </div>
            )}
            {service.users && (
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {service.users}+ users
              </div>
            )}
            {service.trialDays && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {service.trialDays} days free
              </div>
            )}
          </div>
        )}

        {/* Price */}
        {service.price && (
          <div className="mb-4">
            <div className="text-2xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-gray-400">per month</div>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <Link
            href={service.link}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          
          {variant === 'featured' && (
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300" />
    </motion.div>
  );
}