import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'gradient';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  animate?: boolean;
  glow?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'body',
  size = 'md',
  animate = false,
  glow = false
}) => {
  const baseClasses = 'font-semibold';
  
  const variantClasses = {
    heading: 'font-bold text-white',
    subheading: 'font-semibold text-gray-300',
    body: 'text-gray-300',
    caption: 'text-gray-400 text-sm',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const glowClasses = glow ? 'drop-shadow-lg shadow-cyan-400/50' : '';

  const textClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${glowClasses} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={textClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={textClasses}>{children}</div>;
};

export default FuturisticText;