import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 overflow-hidden group
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-purple-600 text-white
      hover:from-cyan-600 hover:to-purple-700
      shadow-lg hover:shadow-cyan-500/25
    `,
    secondary: `
      bg-gradient-to-r from-purple-500 to-pink-600 text-white
      hover:from-purple-600 hover:to-pink-700
      shadow-lg hover:shadow-purple-500/25
    `,
    outline: `
      border-2 border-cyan-400 text-cyan-400
      hover:bg-cyan-400 hover:text-slate-900
      hover:shadow-lg hover:shadow-cyan-400/25
    `,
    ghost: `
      text-gray-300 hover:text-white
      hover:bg-white/10
    `
  };

  const buttonContent = (
    <motion.div
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Neon Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default FuturisticButton;