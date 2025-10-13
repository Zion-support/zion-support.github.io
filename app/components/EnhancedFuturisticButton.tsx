import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface EnhancedFuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'holographic' | 'cyber';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'custom';
  customGlowColor?: string;
  animated?: boolean;
  ripple?: boolean;
}

const EnhancedFuturisticButton: React.FC<EnhancedFuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  loading = false,
  className = '',
  glowColor = 'cyan',
  customGlowColor,
  animated = true,
  ripple = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();

  const getGlowColor = () => {
    if (customGlowColor) return customGlowColor;
    
    const colors = {
      cyan: '#00ffff',
      purple: '#a855f7',
      pink: '#ec4899',
      green: '#00ff88',
      blue: '#3b82f6'
    };
    
    return colors[glowColor] || colors.cyan;
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };
    
    return sizes[size];
  };

  const getVariantClasses = () => {
    const baseClasses = 'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2';
    
    const variants = {
      primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700',
      secondary: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700',
      outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white',
      ghost: 'text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300',
      neon: 'bg-black text-cyan-400 border border-cyan-500 neon-glow-cyan hover:bg-cyan-500/10',
      holographic: 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white border border-transparent holographic',
      cyber: 'bg-slate-900 text-cyan-400 border border-cyan-500/50 cyber-grid hover:bg-cyan-500/10'
    };
    
    return `${baseClasses} ${variants[variant]}`;
  };

  const getHoverEffects = () => {
    if (disabled) return '';
    
    const effects = [
      'hover:scale-105',
      'hover:shadow-lg',
      'active:scale-95'
    ];
    
    if (variant === 'neon' || variant === 'cyber') {
      effects.push('hover:shadow-cyan-500/25');
    }
    
    return effects.join(' ');
  };

  const getGlowStyle = () => {
    if (!isHovered || disabled) return {};
    
    return {
      boxShadow: `0 0 20px ${getGlowColor()}40, 0 0 40px ${getGlowColor()}20, 0 0 60px ${getGlowColor()}10`
    };
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || loading) return;
    
    if (ripple && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x,
        y
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }
    
    if (onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
    
    if (animated) {
      controls.start({
        scale: 1.05,
        transition: { duration: 0.2 }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    if (animated) {
      controls.start({
        scale: 1,
        transition: { duration: 0.2 }
      });
    }
  };

  const handleMouseDown = () => {
    if (disabled) return;
    setIsPressed(true);
    
    if (animated) {
      controls.start({
        scale: 0.95,
        transition: { duration: 0.1 }
      });
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    
    if (animated) {
      controls.start({
        scale: isHovered ? 1.05 : 1,
        transition: { duration: 0.1 }
      });
    }
  };

  useEffect(() => {
    if (animated) {
      controls.start({
        opacity: [0, 1],
        y: [10, 0],
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      });
    }
  }, [animated, controls]);

  const buttonClasses = `
    ${getSizeClasses()}
    ${getVariantClasses()}
    ${getHoverEffects()}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `.trim();

  const buttonContent = (
    <motion.button
      ref={buttonRef}
      className={buttonClasses}
      style={getGlowStyle()}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled || loading}
      animate={controls}
      initial={animated ? { opacity: 0, y: 10 } : {}}
    >
      {/* Animated border for holographic variant */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 rounded-lg">
          <div className="animated-border h-full w-full">
            <div className="h-full w-full bg-transparent rounded-md" />
          </div>
        </div>
      )}
      
      {/* Cyber grid overlay */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 cyber-grid opacity-30 rounded-lg" />
      )}
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            background: `radial-gradient(circle, ${getGlowColor()}40 0%, transparent 70%)`
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
      
      {/* Icon */}
      {icon && !loading && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      
      {/* Text content */}
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Neon glow effect */}
      {variant === 'neon' && isHovered && (
        <div 
          className="absolute inset-0 rounded-lg border-2 opacity-50"
          style={{
            borderColor: getGlowColor(),
            boxShadow: `0 0 10px ${getGlowColor()}50`
          }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default EnhancedFuturisticButton;