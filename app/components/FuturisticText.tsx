import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  gradient?: boolean;
  glow?: boolean;
  animate?: boolean;
  delay?: number;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'body',
  gradient = false,
  glow = false,
  animate = true,
  delay = 0
}) => {
  const variantClasses = {
    heading: 'text-4xl md:text-6xl font-bold',
    subheading: 'text-2xl md:text-4xl font-semibold',
    body: 'text-base md:text-lg',
    caption: 'text-sm md:text-base'
  };

  const gradientClasses = gradient 
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
    : 'text-white';

  const glowClasses = glow 
    ? 'drop-shadow-[0_0_20px_rgba(0,245,255,0.5)]'
    : '';

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  const content = (
    <span className={`
      ${variantClasses[variant]}
      ${gradientClasses}
      ${glowClasses}
      ${className}
    `}>
      {children}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default FuturisticText;