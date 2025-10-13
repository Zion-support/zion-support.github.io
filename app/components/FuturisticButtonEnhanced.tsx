import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FuturisticButtonEnhancedProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon' | 'cyber' | 'holographic';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  animated?: boolean;
  glowEffect?: boolean;
  rippleEffect?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const FuturisticButtonEnhanced: React.FC<FuturisticButtonEnhancedProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  animated = true,
  glowEffect = true,
  rippleEffect = true,
  className = '',
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'px-3 py-1.5 text-xs';
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getVariantClasses = () => {
    const baseClasses = 'relative overflow-hidden font-semibold font-mono uppercase tracking-wider transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25`;
      case 'secondary':
        return `${baseClasses} bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 focus:ring-purple-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/25`;
      case 'outline':
        return `${baseClasses} border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-400`;
      case 'ghost':
        return `${baseClasses} text-white hover:bg-white/10 focus:ring-white/50`;
      case 'neon':
        return `${baseClasses} bg-black/20 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/50`;
      case 'cyber':
        return `${baseClasses} bg-slate-900/50 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25`;
      case 'holographic':
        return `${baseClasses} bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 text-white hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/30 focus:ring-cyan-500 shadow-lg hover:shadow-xl`;
      default:
        return `${baseClasses} bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25`;
    }
  };

  const getDisabledClasses = () => {
    return disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  };

  const getLoadingClasses = () => {
    return loading ? 'cursor-wait' : '';
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!rippleEffect || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    
    createRipple(e);
    onClick?.();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animated) {
      controls.start({
        scale: 1.05,
        transition: { duration: 0.2, ease: 'easeOut' }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animated) {
      controls.start({
        scale: 1,
        transition: { duration: 0.2, ease: 'easeOut' }
      });
    }
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    if (animated) {
      controls.start({
        scale: 0.95,
        transition: { duration: 0.1, ease: 'easeOut' }
      });
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    if (animated) {
      controls.start({
        scale: isHovered ? 1.05 : 1,
        transition: { duration: 0.1, ease: 'easeOut' }
      });
    }
  };

  const buttonContent = (
    <>
      {/* Shimmer Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            transparent 100%)`,
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.6s ease-out'
        }}
      />

      {/* Glow Effect */}
      {glowEffect && isHovered && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-sm -z-10" />
      )}

      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '0.6s'
          }}
        />
      ))}

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Button Content */}
      <div className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
        {Icon && iconPosition === 'left' && (
          <Icon className={`w-4 h-4 ${isHovered ? 'animate-pulse' : ''}`} />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon className={`w-4 h-4 ${isHovered ? 'animate-pulse' : ''}`} />
        )}
      </div>

      {/* Neon Glow for neon variant */}
      {variant === 'neon' && isHovered && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-md -z-10" />
      )}

      {/* Cyber Grid for cyber variant */}
      {variant === 'cyber' && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px'
          }}
        />
      )}
    </>
  );

  const buttonClasses = `
    group relative rounded-lg font-semibold font-mono uppercase tracking-wider
    transition-all duration-300 ease-out focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-offset-slate-900
    ${getSizeClasses()}
    ${getVariantClasses()}
    ${getDisabledClasses()}
    ${getLoadingClasses()}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        ref={buttonRef as any}
        href={href}
        className={buttonClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        animate={controls}
        whileHover={animated ? { scale: 1.05 } : {}}
        whileTap={animated ? { scale: 0.95 } : {}}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      disabled={disabled || loading}
      animate={controls}
      whileHover={animated ? { scale: 1.05 } : {}}
      whileTap={animated ? { scale: 0.95 } : {}}
    >
      {buttonContent}
    </motion.button>
  );
};

export default FuturisticButtonEnhanced;