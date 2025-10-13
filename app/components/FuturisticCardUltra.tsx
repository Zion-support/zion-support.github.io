import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FuturisticCardUltraProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'holographic' | 'neon' | 'glass';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

const FuturisticCardUltra: React.FC<FuturisticCardUltraProps> = ({
  children,
  className = '',
  variant = 'default',
  intensity = 'medium',
  interactive = true,
  glowColor = '#06b6d4',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (interactive) {
      controls.start({
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3, ease: 'easeOut' }
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (interactive) {
      controls.start({
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.3, ease: 'easeOut' }
      });
    }
  };

  const getVariantStyles = () => {
    const baseStyles = 'relative overflow-hidden rounded-xl border transition-all duration-300';
    
    switch (variant) {
      case 'glow':
        return `${baseStyles} bg-slate-800/50 border-cyan-500/30 ${
          isHovered ? 'shadow-2xl shadow-cyan-500/25' : 'shadow-lg shadow-cyan-500/10'
        }`;
      
      case 'holographic':
        return `${baseStyles} bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-pink-900/20 border-purple-500/30 ${
          isHovered ? 'shadow-2xl shadow-purple-500/25' : 'shadow-lg shadow-purple-500/10'
        }`;
      
      case 'neon':
        return `${baseStyles} bg-slate-900/80 border-pink-500/50 ${
          isHovered ? 'shadow-2xl shadow-pink-500/30' : 'shadow-lg shadow-pink-500/15'
        }`;
      
      case 'glass':
        return `${baseStyles} bg-white/5 backdrop-blur-xl border-white/20 ${
          isHovered ? 'shadow-2xl shadow-white/10' : 'shadow-lg shadow-white/5'
        }`;
      
      default:
        return `${baseStyles} bg-slate-800/30 border-slate-700/50 ${
          isHovered ? 'shadow-2xl shadow-slate-500/20' : 'shadow-lg shadow-slate-500/10'
        }`;
    }
  };

  const getIntensityStyles = () => {
    switch (intensity) {
      case 'high':
        return 'p-8';
      case 'medium':
        return 'p-6';
      case 'low':
        return 'p-4';
      default:
        return 'p-6';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${getVariantStyles()} ${getIntensityStyles()} ${className} ${
        interactive ? 'cursor-pointer' : ''
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={controls}
      whileHover={interactive ? { y: -8 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-20 transition-opacity duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}20, transparent)`
            : 'transparent'
        }}
      />
      
      {/* Holographic effect overlay */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
            style={{
              transform: `translateX(${isHovered ? '100%' : '-100%'})`,
              transition: 'transform 0.6s ease-in-out'
            }}
          />
        </div>
      )}
      
      {/* Neon border effect */}
      {variant === 'neon' && (
        <div 
          className="absolute inset-0 rounded-xl opacity-50"
          style={{
            background: `linear-gradient(45deg, transparent, ${glowColor}, transparent)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            padding: '1px',
            animation: isHovered ? 'neonPulse 1s ease-in-out infinite alternate' : 'none'
          }}
        />
      )}
      
      {/* Glass morphism effect */}
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      {isHovered && variant === 'glow' && (
        <div 
          className="absolute inset-0 rounded-xl opacity-30 blur-xl"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}40, transparent)`
          }}
        />
      )}
      
      <style jsx>{`
        @keyframes neonPulse {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
};

export default FuturisticCardUltra;