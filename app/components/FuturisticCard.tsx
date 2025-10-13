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
  className = "", 
  hover = true, 
  glow = true,
  neon = true 
}) => {
  return (
    <motion.div
      className={`
        relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 
        ${neon ? 'shadow-lg shadow-cyan-500/10' : ''}
        ${hover ? 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20' : ''}
        transition-all duration-300 overflow-hidden
        ${className}
      `}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      )}
      
      {/* Neon border effect */}
      {neon && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;