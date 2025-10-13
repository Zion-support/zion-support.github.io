import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  neon?: boolean;
  gradient?: string;
  delay?: number;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = true,
  neon = true,
  gradient = 'from-cyan-500/20 to-purple-500/20',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 }
      } : {}}
      className={`
        relative group bg-gradient-to-br from-slate-800/50 to-slate-900/50 
        backdrop-blur-sm rounded-2xl p-6 border border-white/10 
        hover:border-white/20 transition-all duration-300
        ${glow ? 'hover:shadow-2xl hover:shadow-cyan-500/10' : ''}
        ${neon ? 'hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]' : ''}
        ${className}
      `}
      style={{
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.5) 100%)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-3 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default FuturisticCard;