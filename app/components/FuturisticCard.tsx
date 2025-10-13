import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'neon' | 'holographic';
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glow = true,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !hover) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hover]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'glass-card';
      case 'neon':
        return 'neon-glow bg-slate-800/50 border border-cyan-500/30';
      case 'holographic':
        return 'bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-transparent';
      default:
        return 'bg-white/10 backdrop-blur-sm border border-white/20';
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative rounded-xl p-6 transition-all duration-300 overflow-hidden
        ${getVariantClasses()}
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: hover && isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 20}deg) rotateY(${(mousePosition.x - 200) / 20}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Hover glow effect */}
      {glow && (
        <div 
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0
          }}
        />
      )}

      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
           style={{ padding: '1px' }}>
        <div className="w-full h-full rounded-xl bg-slate-900/50" />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-purple-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-6 left-8 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        </>
      )}
    </motion.div>
  );
};

export default FuturisticCard;