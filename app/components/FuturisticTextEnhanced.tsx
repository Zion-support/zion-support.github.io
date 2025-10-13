import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  variant?: 'display' | 'heading' | 'body' | 'caption';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  gradient?: boolean;
  animated?: boolean;
  glow?: boolean;
  neon?: boolean;
  className?: string;
}

const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({
  children,
  variant = 'body',
  size = 'base',
  gradient = false,
  animated = true,
  glow = false,
  neon = false,
  className = '',
}) => {
  const variantClasses = {
    display: 'font-black tracking-tight',
    heading: 'font-bold tracking-tight',
    body: 'font-normal',
    caption: 'font-medium text-sm',
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  };

  const gradientClasses = gradient ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent' : 'text-white';
  const glowClasses = glow ? 'drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]' : '';
  const neonClasses = neon ? 'text-shadow-[0_0_10px_rgba(6,182,212,0.8)]' : '';

  const baseClasses = `${variantClasses[variant]} ${sizeClasses[size]} ${gradientClasses} ${glowClasses} ${neonClasses} ${className}`;

  if (animated) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {gradient && animated ? (
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {children}
          </motion.span>
        ) : (
          children
        )}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default FuturisticTextEnhanced;