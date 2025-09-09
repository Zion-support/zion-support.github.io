import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  gradient?: boolean;
}

export default function EnhancedCard({ 
  children, 
  className = '',
  hover = true,
  glassmorphism = true,
  shadow = 'lg',
  border = true,
  gradient = false
}: EnhancedCardProps) {
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-2xl'
  };

  const baseClasses = `
    rounded-xl p-6 transition-all duration-300
    ${glassmorphism ? 'backdrop-blur-xl bg-white/10 border border-white/20' : 'bg-white'}
    ${border ? 'border border-gray-200/20' : ''}
    ${shadowClasses[shadow]}
    ${gradient ? 'bg-gradient-to-br from-white/20 to-white/5' : ''}
  `;

  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl hover:bg-white/20' : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}
