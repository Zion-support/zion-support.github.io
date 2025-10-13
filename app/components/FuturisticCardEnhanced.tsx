import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'holographic' | 'neon' | 'cyber';
  hoverEffect?: 'lift' | 'glow' | 'rotate' | 'scale' | 'slide';
  gradient?: 'cyan-purple' | 'purple-pink' | 'blue-green' | 'orange-red' | 'custom';
  customGradient?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange' | 'red';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  delay?: number;
  duration?: number;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = 'lift',
  gradient = 'cyan-purple',
  customGradient,
  glowColor = 'cyan',
  size = 'md',
  animated = true,
  delay = 0,
  duration = 0.6
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4 text-sm';
      case 'md':
        return 'p-6 text-base';
      case 'lg':
        return 'p-8 text-lg';
      case 'xl':
        return 'p-10 text-xl';
      default:
        return 'p-6 text-base';
    }
  };

  const getGradientClasses = () => {
    if (customGradient) return customGradient;
    
    switch (gradient) {
      case 'cyan-purple':
        return 'from-cyan-500 to-purple-600';
      case 'purple-pink':
        return 'from-purple-500 to-pink-600';
      case 'blue-green':
        return 'from-blue-500 to-green-600';
      case 'orange-red':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-cyan-500 to-purple-600';
    }
  };

  const getGlowColor = () => {
    switch (glowColor) {
      case 'cyan':
        return 'shadow-cyan-500/25';
      case 'purple':
        return 'shadow-purple-500/25';
      case 'pink':
        return 'shadow-pink-500/25';
      case 'green':
        return 'shadow-green-500/25';
      case 'blue':
        return 'shadow-blue-500/25';
      case 'orange':
        return 'shadow-orange-500/25';
      case 'red':
        return 'shadow-red-500/25';
      default:
        return 'shadow-cyan-500/25';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'glow':
        return 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg';
      case 'holographic':
        return 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/30';
      case 'neon':
        return 'bg-black/20 backdrop-blur-sm border-2 border-cyan-400/50 shadow-2xl';
      case 'cyber':
        return 'bg-slate-900/50 backdrop-blur-md border border-cyan-500/30 shadow-xl';
      default:
        return 'bg-white/10 backdrop-blur-sm border border-white/20';
    }
  };

  const getHoverEffect = () => {
    switch (hoverEffect) {
      case 'lift':
        return isHovered ? 'transform -translate-y-2 scale-105' : 'transform translate-y-0 scale-100';
      case 'glow':
        return isHovered ? 'shadow-2xl shadow-cyan-500/50' : 'shadow-lg';
      case 'rotate':
        return isHovered ? 'transform rotate-1' : 'transform rotate-0';
      case 'scale':
        return isHovered ? 'transform scale-110' : 'transform scale-100';
      case 'slide':
        return isHovered ? 'transform translate-x-2' : 'transform translate-x-0';
      default:
        return isHovered ? 'transform -translate-y-2 scale-105' : 'transform translate-y-0 scale-100';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isInView && animated) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      });
    }
  }, [isInView, animated, controls, duration, delay]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={animated ? cardVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      animate={animated ? controls : undefined}
      className={`
        relative group rounded-xl overflow-hidden transition-all duration-300 ease-out
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${getHoverEffect()}
        ${isHovered ? getGlowColor() : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Border */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-[2px] bg-slate-900 rounded-xl"></div>
        </div>
      )}

      {/* Holographic Effect */}
      {variant === 'holographic' && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(45deg, 
              rgba(0, 212, 255, 0.1) 0%,
              rgba(139, 92, 246, 0.1) 25%,
              rgba(236, 72, 153, 0.1) 50%,
              rgba(139, 92, 246, 0.1) 75%,
              rgba(0, 212, 255, 0.1) 100%)`,
            backgroundSize: '400% 400%',
            animation: isHovered ? 'holographicShift 2s ease-in-out infinite' : 'none'
          }}
        />
      )}

      {/* Shimmer Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 100%)`,
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.6s ease-out'
        }}
      />

      {/* Glow Effect */}
      {variant === 'glow' && isHovered && (
        <div 
          className="absolute inset-0 rounded-xl opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(0, 212, 255, 0.3) 0%, 
              transparent 50%)`
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Cyber Grid Pattern */}
      {variant === 'cyber' && (
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      )}

      <style jsx>{`
        @keyframes holographicShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

export default FuturisticCardEnhanced;