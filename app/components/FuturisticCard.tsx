import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  border?: boolean;
  onClick?: () => void;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  border = true,
  onClick
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300";
  
  const backgroundClasses = "bg-white/10 backdrop-blur-sm";
  const borderClasses = border ? "border border-white/20" : "";
  const hoverClasses = hover ? "hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10" : "";
  const glowClasses = glow ? "hover:shadow-cyan-500/20" : "";
  const clickClasses = onClick ? "cursor-pointer" : "";

  const cardClasses = `${baseClasses} ${backgroundClasses} ${borderClasses} ${hoverClasses} ${glowClasses} ${clickClasses} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border gradient */}
      {border && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
      </div>
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;