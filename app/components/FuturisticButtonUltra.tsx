import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FuturisticButtonUltraProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'holographic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

const FuturisticButtonUltra: React.FC<FuturisticButtonUltraProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  target
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();

  const getVariantStyles = () => {
    const baseStyles = 'relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
    
    switch (variant) {
      case 'primary':
        return `${baseStyles} bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/25`;
      
      case 'secondary':
        return `${baseStyles} bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 focus:ring-purple-500 shadow-lg hover:shadow-purple-500/25`;
      
      case 'outline':
        return `${baseStyles} border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-400`;
      
      case 'ghost':
        return `${baseStyles} text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 focus:ring-cyan-400`;
      
      case 'neon':
        return `${baseStyles} bg-slate-900 text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-400 shadow-lg hover:shadow-cyan-400/50`;
      
      case 'holographic':
        return `${baseStyles} bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 focus:ring-purple-500 shadow-lg hover:shadow-purple-500/25`;
      
      default:
        return `${baseStyles} bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500`;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm rounded-md';
      case 'md':
        return 'px-4 py-2 text-base rounded-lg';
      case 'lg':
        return 'px-6 py-3 text-lg rounded-lg';
      case 'xl':
        return 'px-8 py-4 text-xl rounded-xl';
      default:
        return 'px-4 py-2 text-base rounded-lg';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!disabled && !loading) {
      controls.start({
        scale: 1.05,
        transition: { duration: 0.2, ease: 'easeOut' }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!disabled && !loading) {
      controls.start({
        scale: 1,
        transition: { duration: 0.2, ease: 'easeOut' }
      });
    }
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    if (!disabled && !loading) {
      controls.start({
        scale: 0.95,
        transition: { duration: 0.1, ease: 'easeOut' }
      });
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    if (!disabled && !loading) {
      controls.start({
        scale: isHovered ? 1.05 : 1,
        transition: { duration: 0.2, ease: 'easeOut' }
      });
    }
  };

  const buttonContent = (
    <motion.button
      ref={buttonRef}
      className={`${getVariantStyles()} ${getSizeStyles()} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      animate={controls}
      whileHover={!disabled && !loading ? { y: -2 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
    >
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: variant === 'holographic' 
            ? 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)'
            : 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.6s ease-in-out, opacity 0.3s ease-in-out'
        }}
      />
      
      {/* Neon glow effect */}
      {variant === 'neon' && isHovered && (
        <div 
          className="absolute inset-0 rounded-lg opacity-50 blur-sm"
          style={{
            background: 'currentColor',
            boxShadow: '0 0 20px currentColor'
          }}
        />
      )}
      
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Button content */}
      <div className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </div>
      
      {/* Ripple effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className="inline-block"
        onClick={(e) => {
          if (disabled || loading) {
            e.preventDefault();
          }
        }}
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default FuturisticButtonUltra;