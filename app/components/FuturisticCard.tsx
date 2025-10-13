import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  neon?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = true,
  neon = true 
}) => {
  return (
    <motion.div
      className={`
        relative group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10
        ${neon ? 'border-cyan-500/30' : ''}
        ${glow ? 'hover:shadow-2xl hover:shadow-cyan-500/20' : ''}
        ${hover ? 'hover:scale-105' : ''}
        transition-all duration-300 overflow-hidden
        ${className}
      `}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Neon Border Effect */}
      {neon && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      )}
      
      {/* Glow Effect */}
      {glow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default FuturisticCard;