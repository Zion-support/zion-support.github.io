import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
  hoverEffect?: boolean;
  animated?: boolean;
  variant?: 'default' | 'neon' | 'holographic' | 'cyber';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  animated = true,
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const glowColors = {
    cyan: 'from-cyan-500/20 to-cyan-600/20',
    purple: 'from-purple-500/20 to-purple-600/20',
    pink: 'from-pink-500/20 to-pink-600/20',
    green: 'from-green-500/20 to-green-600/20',
    blue: 'from-blue-500/20 to-blue-600/20',
    orange: 'from-orange-500/20 to-orange-600/20'
  };

  const borderColors = {
    cyan: 'border-cyan-500/30',
    purple: 'border-purple-500/30',
    pink: 'border-pink-500/30',
    green: 'border-green-500/30',
    blue: 'border-blue-500/30',
    orange: 'border-orange-500/30'
  };

  const shadowColors = {
    cyan: 'shadow-cyan-500/20',
    purple: 'shadow-purple-500/20',
    pink: 'shadow-pink-500/20',
    green: 'shadow-green-500/20',
    blue: 'shadow-blue-500/20',
    orange: 'shadow-orange-500/20'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'neon':
        return `
          bg-gradient-to-br from-slate-800/50 to-slate-900/50
          border border-${glowColor}-500/30
          ${isHovered ? `shadow-2xl shadow-${glowColor}-500/30` : ''}
          ${animated ? 'transition-all duration-300' : ''}
        `;
      case 'holographic':
        return `
          bg-gradient-to-br from-slate-800/30 to-slate-900/30
          border border-transparent
          ${isHovered ? 'holographic-border' : ''}
          ${animated ? 'transition-all duration-500' : ''}
        `;
      case 'cyber':
        return `
          bg-gradient-to-br from-slate-900/80 to-black/80
          border border-${glowColor}-500/50
          ${isHovered ? `neon-glow-${glowColor}` : ''}
          ${animated ? 'transition-all duration-300' : ''}
        `;
      default:
        return `
          bg-white/10 backdrop-blur-sm
          border border-white/20
          ${isHovered ? `hover:bg-white/20` : ''}
          ${animated ? 'transition-all duration-300' : ''}
        `;
    }
  };

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: { 
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      z: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative rounded-xl p-6 overflow-hidden
        ${getVariantStyles()}
        ${className}
        ${hoverEffect ? 'cursor-pointer' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      variants={animated ? cardVariants : undefined}
      initial="initial"
      whileHover={hoverEffect ? "hover" : undefined}
      whileTap={hoverEffect ? { scale: 0.98 } : undefined}
    >
      {/* Animated background gradient */}
      {animated && (
        <div
          className={`
            absolute inset-0 bg-gradient-to-r ${glowColors[glowColor]}
            opacity-0 transition-opacity duration-300
            ${isHovered ? 'opacity-100' : ''}
          `}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              var(--tw-gradient-stops))`
          }}
        />
      )}

      {/* Holographic effect overlay */}
      {variant === 'holographic' && isHovered && (
        <div className="absolute inset-0 holographic opacity-20 pointer-events-none" />
      )}

      {/* Cyber grid overlay */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 futuristic-grid opacity-10 pointer-events-none" />
      )}

      {/* Neon border effect */}
      {variant === 'neon' && isHovered && (
        <div className={`
          absolute inset-0 rounded-xl
          bg-gradient-to-r ${glowColors[glowColor]}
          opacity-50 blur-sm
          -z-10
        `} />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Glow effect */}
      {isHovered && hoverEffect && (
        <div className={`
          absolute inset-0 rounded-xl
          bg-gradient-to-r ${glowColors[glowColor]}
          opacity-20 blur-xl
          -z-10
        `} />
      )}
    </motion.div>
  );
};

export default FuturisticCard;