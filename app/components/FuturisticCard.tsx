'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  neon?: boolean;
  variant?: 'default' | 'service' | 'feature' | 'testimonial';
  onClick?: () => void;
}

export default function FuturisticCard({ 
  children, 
  className = '', 
  hover = true, 
  glow = true, 
  neon = true,
  variant = 'default',
  onClick 
}: FuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'service':
        return 'bg-white/5 backdrop-blur-lg border border-cyan-500/30';
      case 'feature':
        return 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-purple-500/30';
      case 'testimonial':
        return 'bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-lg border border-green-500/30';
      default:
        return 'bg-white/10 backdrop-blur-lg border border-white/20';
    }
  };

  const getGlowEffect = () => {
    if (!glow) return '';
    
    const baseGlow = 'shadow-2xl';
    if (isHovered) {
      switch (variant) {
        case 'service':
          return `${baseGlow} shadow-cyan-500/25`;
        case 'feature':
          return `${baseGlow} shadow-purple-500/25`;
        case 'testimonial':
          return `${baseGlow} shadow-green-500/25`;
        default:
          return `${baseGlow} shadow-cyan-500/25`;
      }
    }
    return baseGlow;
  };

  const getNeonEffect = () => {
    if (!neon) return '';
    
    if (isHovered) {
      switch (variant) {
        case 'service':
          return 'shadow-[0_0_30px_rgba(6,182,212,0.4)]';
        case 'feature':
          return 'shadow-[0_0_30px_rgba(168,85,247,0.4)]';
        case 'testimonial':
          return 'shadow-[0_0_30px_rgba(34,197,94,0.4)]';
        default:
          return 'shadow-[0_0_30px_rgba(6,182,212,0.4)]';
      }
    }
    return '';
  };

  const getPulseEffect = () => {
    if (!isHovered) return '';
    
    const pulseIntensity = Math.sin(time * 4) * 0.1 + 0.9;
    return `scale-${Math.round(pulseIntensity * 100)}`;
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative rounded-2xl p-6 transition-all duration-500 cursor-pointer overflow-hidden
        ${getVariantClasses()}
        ${getGlowEffect()}
        ${getNeonEffect()}
        ${hover ? 'hover:scale-105 hover:rotate-1' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Animated scanning line */}
      {isHovered && (
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Mouse follow effect with enhanced glow */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-2xl"
          style={{
            left: mousePosition.x - 75,
            top: mousePosition.y - 75,
            width: 150,
            height: 150,
            background: `radial-gradient(circle, ${
              variant === 'service' ? 'rgba(6,182,212,0.3)' :
              variant === 'feature' ? 'rgba(168,85,247,0.3)' :
              variant === 'testimonial' ? 'rgba(34,197,94,0.3)' :
              'rgba(6,182,212,0.3)'
            } 0%, transparent 70%)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Animated corner brackets */}
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-purple-400/60 rounded-bl-lg" />
      
      {/* Pulsing corner dots */}
      <motion.div
        className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-3 left-3 w-2 h-2 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content with enhanced z-index */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(6,182,212,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(168,85,247,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
    </motion.div>
  );
}