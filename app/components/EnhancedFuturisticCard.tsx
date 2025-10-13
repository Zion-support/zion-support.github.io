import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'neon' | 'holographic' | 'cyber' | 'glitch';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'rotate' | 'none';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'custom';
  customGlowColor?: string;
  animated?: boolean;
  delay?: number;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = 'lift',
  glowColor = 'cyan',
  customGlowColor,
  animated = true,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
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

  const getVariantClasses = () => {
    const baseClasses = 'relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300';
    
    const variantClasses = {
      default: 'bg-white/10 border-white/20',
      neon: 'bg-black/20 border-cyan-500/50 neon-glow-cyan',
      holographic: 'bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-transparent',
      cyber: 'bg-slate-900/50 border-cyan-500/30 cyber-grid',
      glitch: 'bg-slate-800/50 border-purple-500/50 glitch'
    };
    
    return `${baseClasses} ${variantClasses[variant]}`;
  };

  const getHoverClasses = () => {
    if (!isHovered) return '';
    
    const hoverClasses = {
      lift: 'hover-lift',
      glow: 'hover-glow',
      scale: 'transform scale-105',
      rotate: 'transform rotate-1',
      none: ''
    };
    
    return hoverClasses[hoverEffect];
  };

  useEffect(() => {
    if (animated) {
      controls.start({
        opacity: [0, 1],
        y: [20, 0],
        transition: {
          duration: 0.6,
          delay: delay * 0.1,
          ease: 'easeOut'
        }
      });
    }
  }, [animated, delay, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animated) {
      controls.start({
        scale: 1.02,
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

  const glowStyle = isHovered ? {
    boxShadow: `0 0 20px ${getGlowColor()}40, 0 0 40px ${getGlowColor()}20, 0 0 60px ${getGlowColor()}10`
  } : {};

  return (
    <motion.div
      ref={cardRef}
      className={`${getVariantClasses()} ${getHoverClasses()} ${className}`}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      initial={animated ? { opacity: 0, y: 20 } : {}}
    >
      {/* Animated border for holographic variant */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 rounded-xl">
          <div className="animated-border h-full w-full">
            <div className="h-full w-full bg-slate-900/50 rounded-lg" />
          </div>
        </div>
      )}
      
      {/* Glitch effect overlay */}
      {variant === 'glitch' && isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-50 animate-pulse" />
      )}
      
      {/* Cyber grid overlay */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 cyber-grid opacity-30" />
      )}
      
      {/* Holographic scan lines */}
      {variant === 'holographic' && (
        <div className="absolute inset-0">
          <div className="holographic-scan-lines absolute inset-0 opacity-20" />
        </div>
      )}
      
      {/* Mouse tracking glow effect */}
      {isHovered && hoverEffect === 'glow' && (
        <div
          className="absolute pointer-events-none rounded-full opacity-30"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: `radial-gradient(circle, ${getGlowColor()}40 0%, transparent 70%)`,
            transition: 'all 0.1s ease-out'
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Neon border animation */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-xl">
          <div 
            className="absolute inset-0 rounded-xl border-2 opacity-0 transition-opacity duration-300"
            style={{
              borderColor: getGlowColor(),
              opacity: isHovered ? 1 : 0,
              boxShadow: `0 0 10px ${getGlowColor()}50`
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default EnhancedFuturisticCard;