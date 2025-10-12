'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  className?: string;
  onClick?: () => void;
}

export default function FuturisticCard({
  children, 
  variant = 'default', 
  className = '', 
  onClick 
}: FuturisticCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2xl hover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xl border border-indigo-500/30 hover:border-indigo-400/50 shadow-2xl hover:shadow-indigo-500/20';
      default:
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 shadow-2xl hover:shadow-cyan-500/20';
    }
  };

  return (
    <motion.div
      className={`relative rounded-2xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${getVariantStyles()} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}