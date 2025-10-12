'use client';
import React, { useState, useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);

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
          return 'shadow-[0_0_20px_rgba(6,182,212,0.3)]';
        case 'feature':
          return 'shadow-[0_0_20px_rgba(168,85,247,0.3)]';
        case 'testimonial':
          return 'shadow-[0_0_20px_rgba(34,197,94,0.3)]';
        default:
          return 'shadow-[0_0_20px_rgba(6,182,212,0.3)]';
      }
    }
    return '';
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
      whileHover={{
        y: -8,
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Mouse follow effect */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-xl"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Scanning line effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
    </motion.div>
  </div></div></div></div>);
}