'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'cyan' | 'purple' | 'pink' | 'green';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'cyan',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'cyan':
        return 'text-cyan-400 border-cyan-400 shadow-cyan-400/50 hover:shadow-cyan-400/75';
      case 'purple':
        return 'text-purple-400 border-purple-400 shadow-purple-400/50 hover:shadow-purple-400/75';
      case 'pink':
        return 'text-pink-400 border-pink-400 shadow-pink-400/50 hover:shadow-pink-400/75';
      case 'green':
        return 'text-green-400 border-green-400 shadow-green-400/50 hover:shadow-green-400/75';
      default:
        return 'text-cyan-400 border-cyan-400 shadow-cyan-400/50 hover:shadow-cyan-400/75';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden rounded-lg font-semibold
        border-2 bg-transparent backdrop-blur-sm
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      style={{
        boxShadow: `0 0 20px currentColor`
      }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0"
        animate={{ 
          opacity: [0, 0.1, 0],
          x: ['-100%', '100%']
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Content */}
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
};

export default NeonButton;