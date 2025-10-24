'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  className?: string;
  onClick?: () => void;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50';
      case 'testimonial':
        return 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600';
      case 'feature':
        return 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30';
      default:
        return 'bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600';
    }
  };

  const baseClasses = `
    relative overflow-hidden rounded-2xl p-6 transition-all duration-300
    hover:scale-105 hover:-translate-y-1
    ${getVariantStyles()}
    ${className}
  `.trim();

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;