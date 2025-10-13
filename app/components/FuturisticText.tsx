import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  gradient?: boolean;
  glow?: boolean;
  animate?: boolean;
  className?: string;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  variant = 'body',
  gradient = false,
  glow = false,
  animate = false,
  className = ''
}) => {
  const variantClasses = {
    heading: "text-4xl md:text-6xl font-bold",
    subheading: "text-2xl md:text-3xl font-semibold",
    body: "text-base md:text-lg",
    caption: "text-sm md:text-base"
  };

  const gradientClasses = gradient ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" : "text-white";
  const glowClasses = glow ? "drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "";

  const textClasses = `${variantClasses[variant]} ${gradientClasses} ${glowClasses} ${className}`;

  const textElement = (
    <span className={textClasses}>
      {children}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {textElement}
      </motion.div>
    );
  }

  return textElement;
};

export default FuturisticText;