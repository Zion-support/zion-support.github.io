import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  variant?: 'default' | 'glass' | 'neon';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  variant = 'default'
}) => {
  const baseClasses = 'relative rounded-xl overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50',
    glass: 'bg-slate-900/20 backdrop-blur-md border border-white/10',
    neon: 'bg-slate-800/30 backdrop-blur-sm border border-purple-500/30'
  };

  const hoverClasses = hover ? 'hover:bg-slate-700/50 hover:scale-105 hover:shadow-2xl' : '';
  const glowClasses = glow ? 'hover:shadow-purple-500/25' : '';

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${glowClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-xl" />
    </motion.div>
  );
};

export default FuturisticCard;
