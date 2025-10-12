'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

export default function NeonButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  href,
  target,
  rel
}: NeonButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          base: 'bg-gradient-to-r from-cyan-600 to-purple-600',
          hover: 'hover:from-cyan-700 hover:to-purple-700',
          glow: 'shadow-cyan-500/50',
          border: 'border-cyan-500/50',
          text: 'text-white'
        };
      case 'secondary':
        return {
          base: 'bg-gradient-to-r from-purple-600 to-pink-600',
          hover: 'hover:from-purple-700 hover:to-pink-700',
          glow: 'shadow-purple-500/50',
          border: 'border-purple-500/50',
          text: 'text-white'
        };
      case 'accent':
        return {
          base: 'bg-gradient-to-r from-green-600 to-cyan-600',
          hover: 'hover:from-green-700 hover:to-cyan-700',
          glow: 'shadow-green-500/50',
          border: 'border-green-500/50',
          text: 'text-white'
        };
      case 'danger':
        return {
          base: 'bg-gradient-to-r from-red-600 to-pink-600',
          hover: 'hover:from-red-700 hover:to-pink-700',
          glow: 'shadow-red-500/50',
          border: 'border-red-500/50',
          text: 'text-white'
        };
      default:
        return {
          base: 'bg-gradient-to-r from-cyan-600 to-purple-600',
          hover: 'hover:from-cyan-700 hover:to-purple-700',
          glow: 'shadow-cyan-500/50',
          border: 'border-cyan-500/50',
          text: 'text-white'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const styles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const baseClasses = `
    relative overflow-hidden rounded-lg font-semibold transition-all duration-300
    ${styles.base} ${styles.hover} ${styles.text} ${sizeStyles}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim();

  const glowClasses = `
    absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300
    ${styles.glow} shadow-lg
    ${!disabled ? 'group-hover:opacity-100' : ''}
  `;

  const borderClasses = `
    absolute inset-0 rounded-lg border-2 transition-all duration-300
    ${styles.border}
    ${!disabled ? 'group-hover:border-opacity-100' : 'border-opacity-50'}
  `;

  const content = (
    <motion.div
      className="group relative"
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Glow effect */}
      <div className={glowClasses} />
      
      {/* Border */}
      <div className={borderClasses} />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onClick={disabled ? undefined : onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}