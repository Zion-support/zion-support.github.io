'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'neon' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function FuturisticCard({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  hover = true,
  onClick,
  delay = 0
}: FuturisticCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'glow':
        return {
          base: 'bg-gradient-to-br from-slate-800/50 to-purple-800/50',
          border: 'border-2 border-cyan-500/30',
          shadow: 'shadow-2xl shadow-cyan-500/20',
          hover: 'hover:border-cyan-500/60 hover:shadow-cyan-500/40'
        };
      case 'neon':
        return {
          base: 'bg-gradient-to-br from-slate-900/80 to-purple-900/80',
          border: 'border-2 border-purple-500/50',
          shadow: 'shadow-2xl shadow-purple-500/30',
          hover: 'hover:border-purple-500/80 hover:shadow-purple-500/60'
        };
      case 'glass':
        return {
          base: 'bg-white/10 backdrop-blur-lg',
          border: 'border border-white/20',
          shadow: 'shadow-2xl shadow-white/10',
          hover: 'hover:bg-white/15 hover:border-white/30'
        };
      default:
        return {
          base: 'bg-white/10 backdrop-blur-lg',
          border: 'border border-white/20',
          shadow: 'shadow-xl shadow-black/20',
          hover: 'hover:bg-white/15 hover:border-white/30'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'md':
        return 'p-6';
      case 'lg':
        return 'p-8';
      case 'xl':
        return 'p-10';
      default:
        return 'p-6';
    }
  };

  const styles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const baseClasses = `
    relative rounded-2xl transition-all duration-300
    ${styles.base} ${styles.border} ${styles.shadow}
    ${hover ? styles.hover : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    },
    hover: hover ? {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    } : {}
  };

  return (
    <motion.div
      className={baseClasses}
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      whileHover={hover ? "hover" : undefined}
      onClick={onClick}
    >
      {/* Animated border glow */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}