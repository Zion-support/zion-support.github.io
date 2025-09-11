import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  direction = 'up'
}) => {
  const directionVariants = {
    up: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -60 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } }
  };

  const baseClasses = 'bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/20 rounded-xl transition-all duration-300';
  const hoverClasses = hover ? 'hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/10' : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={directionVariants[direction].initial}
      animate={directionVariants[direction].animate}
      transition={{ 
        duration: 0.6, 
        ease: 'easeOut',
        delay 
      }}
      whileHover={hover ? { 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}
    </motion.div>
  );
};