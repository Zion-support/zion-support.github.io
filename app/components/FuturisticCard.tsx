import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
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
    orange: 'shadow-orange-500/20 hover:shadow-orange-500/40'
  };

  const borderColors = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    pink: 'border-pink-500/30 hover:border-pink-500/60',
    green: 'border-green-500/30 hover:border-green-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
    orange: 'border-orange-500/30 hover:border-orange-500/60'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`
        relative bg-white/10 backdrop-blur-sm rounded-xl border transition-all duration-300
        ${borderColors[glowColor]}
        ${glowColors[glowColor]}
        ${hover ? 'hover:bg-white/20' : ''}
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)',
        border: `1px solid rgba(255,255,255,0.2)`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;