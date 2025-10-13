import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'yellow' | 'red';
  hover?: boolean;
  delay?: number;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hover = true,
  delay = 0
}) => {
  const glowColors = {
    cyan: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/40',
    pink: 'shadow-pink-500/20 hover:shadow-pink-500/40',
    green: 'shadow-green-500/20 hover:shadow-green-500/40',
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    yellow: 'shadow-yellow-500/20 hover:shadow-yellow-500/40',
    red: 'shadow-red-500/20 hover:shadow-red-500/40'
  };

  const borderColors = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    pink: 'border-pink-500/30 hover:border-pink-500/60',
    green: 'border-green-500/30 hover:border-green-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
    yellow: 'border-yellow-500/30 hover:border-yellow-500/60',
    red: 'border-red-500/30 hover:border-red-500/60'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3 }
      } : {}}
      className={`
        relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20
        ${borderColors[glowColor]}
        ${glowColors[glowColor]}
        hover:bg-white/20 transition-all duration-300
        ${className}
      `}
      style={{
        boxShadow: `0 0 20px rgba(0, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl"></div>
    </motion.div>
  );
};

export default FuturisticCard;