import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'relative font-semibold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 focus:ring-purple-500 shadow-lg shadow-purple-500/25',
    secondary: 'bg-slate-800 text-purple-300 border border-purple-500 hover:bg-purple-500 hover:text-white focus:ring-purple-500 shadow-lg shadow-purple-500/25',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 focus:ring-cyan-500 shadow-lg shadow-cyan-500/25'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none' : 'hover:scale-105 active:scale-95';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Neon glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-border">
        <div className="absolute inset-0 rounded-lg bg-slate-900 m-px" />
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Animated shine effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute -top-2 -left-2 w-4 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transform -skew-x-12 transition-all duration-500" />
      </div>
    </motion.button>
  );
};

export default FuturisticButton;
