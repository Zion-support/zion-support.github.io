import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  gradient?: string;
  animate?: boolean;
  delay?: number;
  glow?: boolean;
  neon?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  className = '',
  variant = 'body',
  gradient = 'from-cyan-400 via-purple-400 to-pink-400',
  animate = true,
  delay = 0,
  glow = false,
  neon = false
}) => {
  const variantClasses = {
    heading: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    subheading: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    body: 'text-base md:text-lg',
    caption: 'text-sm md:text-base'
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }
    }
  };

  const gradientText = (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
      {children}
    </span>
  );

  const content = (
    <motion.div
      variants={animate ? textVariants : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
      className={`
        ${variantClasses[variant]}
        ${className}
        ${glow ? 'drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]' : ''}
        ${neon ? 'text-shadow-[0_0_20px_rgba(0,255,255,0.8)]' : ''}
      `}
    >
      {gradient ? gradientText : children}
    </motion.div>
  );

  return content;
};

export default FuturisticText;