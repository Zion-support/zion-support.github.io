import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = "",
  hover = true,
  glow = true,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { 
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      } : {}}
      className={`
        relative group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 
        transition-all duration-300 overflow-hidden
        ${glow ? 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' : ''}
        ${className}
      `}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300"></div>
      
      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-shadow duration-300"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;