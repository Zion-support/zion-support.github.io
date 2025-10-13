import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  text: string;
  className?: string;
  variant?: 'default' | 'cyber' | 'neon' | 'holographic' | 'glitch' | 'matrix';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange' | 'white';
  animated?: boolean;
  delay?: number;
  speed?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  text,
  className = '',
  variant = 'default',
  size = 'md',
  color = 'white',
  animated = true,
  delay = 0,
  speed = 100,
  as: Component = 'span'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl'
  };

  const colorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
    orange: 'text-orange-400',
    white: 'text-white'
  };

  const getVariantStyles = () => {
    const baseStyles = `${sizeClasses[size]} ${colorClasses[color]} ${className}`;
    
    switch (variant) {
      case 'cyber':
        return `${baseStyles} cyber-text font-mono tracking-wider`;
      case 'neon':
        return `${baseStyles} neon-glow-${color} font-bold`;
      case 'holographic':
        return `${baseStyles} holographic font-bold`;
      case 'glitch':
        return `${baseStyles} glitch font-bold`;
      case 'matrix':
        return `${baseStyles} text-green-400 font-mono tracking-wider`;
      default:
        return baseStyles;
    }
  };

  // Typewriter effect
  useEffect(() => {
    if (!animated || isComplete) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, animated, isComplete]);

  // Reset animation when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay / 1000,
        ease: "easeOut"
      }
    }
  };

  const characterVariants = {
    initial: { 
      opacity: 0,
      y: 10,
      rotateX: -90
    },
    animate: (i: number) => ({ 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.1,
        delay: (delay + i * speed) / 1000,
        ease: "easeOut"
      }
    })
  };

  if (variant === 'glitch') {
    return (
      <motion.div
        className={getVariantStyles()}
        variants={textVariants}
        initial="initial"
        animate="animate"
        data-text={text}
      >
        {animated ? displayText : text}
      </motion.div>
    );
  }

  if (animated && variant !== 'default') {
    return (
      <motion.div
        className={getVariantStyles()}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={characterVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      as={Component}
      className={getVariantStyles()}
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      {animated ? displayText : text}
    </motion.div>
  );
};

export default FuturisticText;