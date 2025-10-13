import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'cyber';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  animated?: boolean;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
  icon?: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  animated = true,
  glowColor = 'cyan',
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const getVariantStyles = () => {
    const baseStyles = 'relative font-semibold rounded-lg transition-all duration-300 overflow-hidden';
    
    switch (variant) {
      case 'primary':
        return `${baseStyles} bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25`;
      case 'secondary':
        return `${baseStyles} bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 border border-slate-600`;
      case 'outline':
        return `${baseStyles} border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900`;
      case 'ghost':
        return `${baseStyles} text-gray-300 hover:text-white hover:bg-white/10`;
      case 'neon':
        return `${baseStyles} bg-slate-900 text-${glowColor}-400 border border-${glowColor}-500 hover:bg-${glowColor}-500 hover:text-slate-900 neon-glow-${glowColor}`;
      case 'cyber':
        return `${baseStyles} bg-gradient-to-r from-slate-900 to-black text-${glowColor}-400 border border-${glowColor}-500 hover:bg-${glowColor}-500 hover:text-black cyber-text`;
      default:
        return baseStyles;
    }
  };

  const getGlowEffect = () => {
    if (!isHovered || !animated) return '';
    
    const glowColors = {
      cyan: 'shadow-cyan-500/50',
      purple: 'shadow-purple-500/50',
      pink: 'shadow-pink-500/50',
      green: 'shadow-green-500/50',
      blue: 'shadow-blue-500/50',
      orange: 'shadow-orange-500/50'
    };
    
    return `shadow-2xl ${glowColors[glowColor]}`;
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0
    },
    hover: { 
      scale: 1.05,
      rotateX: 2,
      rotateY: 2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    hover: { 
      x: '100%',
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const ButtonContent = () => (
    <motion.button
      ref={buttonRef}
      className={`
        ${getVariantStyles()}
        ${sizeClasses[size]}
        ${getGlowEffect()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
        group
      `}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      variants={animated ? buttonVariants : undefined}
      initial="initial"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
    >
      {/* Shimmer effect */}
      {animated && variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={shimmerVariants}
          initial="initial"
          whileHover="hover"
        />
      )}

      {/* Glow effect */}
      {animated && isHovered && (variant === 'neon' || variant === 'cyber') && (
        <div className={`
          absolute inset-0 rounded-lg
          bg-gradient-to-r from-${glowColor}-500/20 to-${glowColor}-600/20
          blur-sm -z-10
        `} />
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>

      {/* Ripple effect */}
      {animated && isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <Link to={href} className="inline-block">
        <ButtonContent />
      </Link>
    );
  }

  return <ButtonContent />;
};

export default FuturisticButton;