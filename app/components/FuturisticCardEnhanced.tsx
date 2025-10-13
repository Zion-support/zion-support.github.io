import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'holographic' | 'glass' | 'neon' | 'cyber';
  glowColor?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'orange' | 'red';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'rotate' | 'slide';
  animation?: 'pulse' | 'float' | 'scan' | 'matrix' | 'quantum';
  interactive?: boolean;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({
  children,
  className = '',
  variant = 'default',
  glowColor = 'purple',
  hoverEffect = 'lift',
  animation = 'pulse',
  interactive = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const glowColors = {
    purple: 'rgba(139, 92, 246, 0.3)',
    cyan: 'rgba(6, 182, 212, 0.3)',
    pink: 'rgba(236, 72, 153, 0.3)',
    green: 'rgba(16, 185, 129, 0.3)',
    blue: 'rgba(59, 130, 246, 0.3)',
    orange: 'rgba(245, 158, 11, 0.3)',
    red: 'rgba(239, 68, 68, 0.3)'
  };

  const getVariantClass = () => {
    const variants = {
      default: 'bg-slate-800/50 backdrop-blur-sm border border-white/20',
      holographic: 'holographic-card bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10',
      glass: 'glass-enhanced bg-white/5 backdrop-blur-xl border border-white/10',
      neon: 'bg-slate-900/80 border-2 border-cyan-400/50 shadow-lg',
      cyber: 'bg-slate-900 border border-green-400/30 shadow-lg'
    };
    return variants[variant];
  };

  const getAnimationClass = () => {
    const animations = {
      pulse: 'pulse-glow-enhanced',
      float: 'float-enhanced',
      scan: 'scan-lines-enhanced',
      matrix: 'data-stream',
      quantum: 'quantum-particles'
    };
    return animations[animation];
  };

  const getHoverEffect = () => {
    const effects = {
      lift: 'hover:translate-y-[-8px] hover:scale-105',
      glow: 'hover:shadow-2xl hover:shadow-purple-500/25',
      scale: 'hover:scale-110',
      rotate: 'hover:rotate-1',
      slide: 'hover:translate-x-2 hover:translate-y-[-4px]'
    };
    return effects[hoverEffect];
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Mouse tracking effect
  useEffect(() => {
    if (!cardRef.current || !interactive) return;

    const card = cardRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    hover: {
      scale: 1.05,
      rotateX: interactive ? (mousePosition.y - 150) / 30 : 0,
      rotateY: interactive ? (mousePosition.x - 150) / 30 : 0,
      boxShadow: `0 20px 40px ${glowColors[glowColor]}`,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative rounded-xl p-6 transition-all duration-300 group
        ${getVariantClass()}
        ${getAnimationClass()}
        ${getHoverEffect()}
        ${className}
      `}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Holographic scan line effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div 
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
            style={{
              top: isHovered ? '50%' : '0%',
              transition: 'top 0.6s ease-in-out'
            }}
          />
        </div>
      )}

      {/* Neon glow effect */}
      {variant === 'neon' && (
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, ${glowColors[glowColor]}, transparent)`,
            filter: 'blur(20px)'
          }}
        />
      )}

      {/* Cyber grid overlay */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      )}

      {/* Interactive mouse tracking effect */}
      {interactive && (
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent 50%)`
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Border glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, ${glowColors[glowColor]}, transparent, ${glowColors[glowColor]})`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
    </motion.div>
  );
};

export default FuturisticCardEnhanced;