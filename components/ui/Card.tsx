import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-slate-900/60 to-slate-800/40 border-white/10' 
    : 'bg-slate-900/60 border-white/10';
  const hoverClasses = hover ? 'hover:border-cyan-500/40 hover:scale-105' : '';
  
  const classes = `${baseClasses} ${gradientClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;