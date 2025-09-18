<<<<<<< HEAD
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'holographic' | 'quantum' | 'neural' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  borderColor?: string;
  background?: 'transparent' | 'glass' | 'solid';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'holographic',
  intensity = 'medium',
  interactive = true,
  glowColor,
  borderColor,
  background = 'glass',
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const scale = useSpring(isHovered ? 1.05 : 1, springConfig);
  const glowIntensity = useSpring(isHovered ? 1 : 0.3, springConfig);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          glow: glowColor || '#00ffff',
          border: borderColor || '#00ffff',
          background: 'rgba(0, 255, 255, 0.05)',
          shadow: '0 0 30px rgba(0, 255, 255, 0.3)'
        };
      case 'neural':
        return {
          glow: glowColor || '#ff6b6b',
          border: borderColor || '#ff6b6b',
          background: 'rgba(255, 107, 107, 0.05)',
          shadow: '0 0 30px rgba(255, 107, 107, 0.3)'
        };
      case 'cyberpunk':
        return {
          glow: glowColor || '#00ff00',
          border: borderColor || '#00ff00',
          background: 'rgba(0, 255, 0, 0.05)',
          shadow: '0 0 30px rgba(0, 255, 0, 0.3)'
        };
      default: // holographic
        return {
          glow: glowColor || '#ff00ff',
          border: borderColor || '#ff00ff',
          background: 'rgba(255, 0, 255, 0.05)',
          shadow: '0 0 30px rgba(255, 0, 255, 0.3)'
        };
    }
  };

  const getSizeStyles = () => {
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

  const getBackgroundStyles = () => {
    switch (background) {
      case 'glass':
        return 'backdrop-blur-md bg-white/10';
      case 'solid':
        return 'bg-gray-900/80';
      default:
        return 'bg-transparent';
    }
  };

  const styles = getVariantStyles();
  const sizeStyles = getSizeStyles();
  const bgStyles = getBackgroundStyles();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((event.clientX - centerX) / (rect.width / 2));
    mouseY.set((event.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    if (!interactive) return;
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (!interactive) return;
    setIsPressed(false);
  };

  // Add floating particles effect
  useEffect(() => {
    if (!cardRef.current || !isHovered) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 100,
        maxLife: 100
      });
    };

    const interval = setInterval(() => {
      if (particles.length < 10) {
        createParticle();
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isHovered]);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedFuturisticCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedFuturisticCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedFuturisticCard;
