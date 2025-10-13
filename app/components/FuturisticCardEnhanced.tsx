import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  variant?: 'default' | 'glass' | 'neon' | 'holographic';
  onClick?: () => void;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  variant = 'default',
  onClick
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl",
    glass: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl",
    neon: "bg-slate-900/50 backdrop-blur-sm border border-cyan-400/50 rounded-xl shadow-lg shadow-cyan-500/10",
    holographic: "bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl"
  };

  const hoverClasses = hover ? "hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/10" : "";
  const glowClasses = glow ? "hover:border-cyan-400/50" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${glowClasses} ${clickableClasses} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Scan Line Effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default FuturisticCardEnhanced;