import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FuturisticServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'premium' | 'enterprise';
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  onClick,
  className = '',
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-br from-purple-900/60 via-indigo-900/40 to-purple-900/60 border-purple-500/30 hover:border-purple-400/50 shadow-purple-500/20';
      case 'enterprise':
        return 'bg-gradient-to-br from-cyan-900/60 via-blue-900/40 to-cyan-900/60 border-cyan-500/30 hover:border-cyan-400/50 shadow-cyan-500/20';
      default:
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 border-white/20 hover:border-cyan-500/50 shadow-cyan-500/20';
    }
  };

  return (
    <motion.div
      className={`relative rounded-2xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden backdrop-blur-xl border shadow-2xl hover:shadow-2xl ${getVariantStyles()} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        {price && (
          <div className="mb-6">
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
        )}

        {/* CTA Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default FuturisticServiceCard;