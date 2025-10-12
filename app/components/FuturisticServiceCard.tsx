import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FuturisticCard from './FuturisticCard';

interface FuturisticServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
  onClick?: () => void;
  className?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title,
  description,
  features,
  price,
  popular = false,
  onClick,
  className = ''
}) => {
  return (
    <FuturisticCard
      variant="service"
      onClick={onClick}
      className={`relative ${popular ? 'ring-2 ring-cyan-400/50' : ''} ${className}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
        
        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Price */}
        {price && (
          <div className="text-center pt-4 border-t border-white/10">
            <div className="text-3xl font-bold text-white mb-1">{price}</div>
            <div className="text-gray-400 text-sm">per month</div>
          </div>
        )}
        
        {/* CTA Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </div>
    </FuturisticCard>
  );
};

export default FuturisticServiceCard;