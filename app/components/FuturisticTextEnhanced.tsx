import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'display';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white' | 'cyan' | 'purple' | 'pink';
  gradient?: boolean;
  animated?: boolean;
  glow?: boolean;
  neon?: boolean;
  className?: string;
  delay?: number;
  duration?: number;
}

const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({
  children,
  variant = 'body',
  size = 'md',
  color = 'white',
  gradient = false,
  animated = true,
  glow = false,
  neon = false,
  className = '',
  delay = 0,
  duration = 0.6
}) => {
  const variantClasses = {
    heading: 'font-bold',
    subheading: 'font-semibold',
    body: 'font-normal',
    caption: 'font-light',
    display: 'font-black'
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

  const colorClasses = {
    primary: 'text-white',
    secondary: 'text-gray-300',
    accent: 'text-cyan-400',
    muted: 'text-gray-400',
    white: 'text-white',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  };

  const gradientClasses = {
    primary: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400',
    cyan: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600',
    purple: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600',
    pink: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600'
  };

  const glowClasses = {
    cyan: 'drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
    purple: 'drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]',
    pink: 'drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]'
  };

  const neonClasses = {
    cyan: 'text-shadow-[0_0_20px_rgba(6,182,212,0.8)]',
    purple: 'text-shadow-[0_0_20px_rgba(139,92,246,0.8)]',
    pink: 'text-shadow-[0_0_20px_rgba(236,72,153,0.8)]'
  };

  const textVariants = {
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
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const getTextColor = () => {
    if (gradient) {
      return gradientClasses[color as keyof typeof gradientClasses] || gradientClasses.primary;
    }
    return colorClasses[color];
  };

  const getGlowEffect = () => {
    if (glow) {
      return glowClasses[color as keyof typeof glowClasses] || glowClasses.cyan;
    }
    return '';
  };

  const getNeonEffect = () => {
    if (neon) {
      return neonClasses[color as keyof typeof neonClasses] || neonClasses.cyan;
    }
    return '';
  };

  const textClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${getTextColor()}
    ${getGlowEffect()}
    ${getNeonEffect()}
    ${className}
  `;

  if (animated) {
    return (
      <motion.div
        className={textClasses}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={textClasses}>
      {children}
    </div>
  );
};

export default FuturisticTextEnhanced;