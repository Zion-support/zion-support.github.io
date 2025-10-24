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
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-purple-900/40 via-slate-800/30 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2xl hover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-emerald-900/40 via-slate-800/30 to-emerald-900/40 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/20';
      default:
        return 'bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-white/10';
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
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)',
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          transform: 'translateX(-100%)',
        }}
        whileHover={{
          transform: 'translateX(100%)',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default FuturisticCard;