'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  variant?: 'typewriter' | 'fade' | 'slide' | 'glitch' | 'neon';
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'white';
}

export default function AnimatedText({
  text,
  variant = 'fade',
  speed = 50,
  delay = 0,
  className = '',
  as: Component = 'h1',
  color = 'white'
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getColorClass = () => {
    switch (color) {
      case 'cyan':
        return 'text-cyan-400';
      case 'purple':
        return 'text-purple-400';
      case 'pink':
        return 'text-pink-400';
      case 'green':
        return 'text-green-400';
      case 'blue':
        return 'text-blue-400';
      case 'white':
        return 'text-white';
      default:
        return 'text-white';
    }
  };

  const getGlowClass = () => {
    switch (color) {
      case 'cyan':
        return 'drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]';
      case 'purple':
        return 'drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]';
      case 'pink':
        return 'drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]';
      case 'green':
        return 'drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]';
      case 'blue':
        return 'drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]';
      case 'white':
        return 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]';
      default:
        return 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]';
    }
  };

  useEffect(() => {
    if (variant === 'typewriter') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setDisplayText(text);
    }
  }, [text, currentIndex, speed, variant]);

  const getAnimationVariants = () => {
    switch (variant) {
      case 'fade':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: delay,
              ease: "easeOut"
            }
          }
        };
      case 'slide':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.6,
              delay: delay,
              ease: "easeOut"
            }
          }
        };
      case 'glitch':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: delay,
              ease: "easeOut"
            }
          }
        };
      case 'neon':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.8,
              delay: delay,
              ease: "easeOut"
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: delay
            }
          }
        };
    }
  };

  const renderText = () => {
    if (variant === 'glitch') {
      return (
        <motion.div
          className={`${getColorClass()} ${getGlowClass()} ${className}`}
          variants={getAnimationVariants()}
          initial="hidden"
          animate="visible"
        >
          {displayText.split('').map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              animate={{
                x: [0, Math.random() * 4 - 2, 0],
                color: [
                  getColorClass(),
                  color === 'cyan' ? 'text-pink-400' : 'text-cyan-400',
                  getColorClass()
                ]
              }}
              transition={{
                duration: 0.1,
                delay: index * 0.05,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    if (variant === 'neon') {
      return (
        <motion.div
          className={`${getColorClass()} ${getGlowClass()} ${className}`}
          variants={getAnimationVariants()}
          initial="hidden"
          animate="visible"
        >
          {displayText}
        </motion.div>
      );
    }

    return (
      <motion.div
        className={`${getColorClass()} ${className}`}
        variants={getAnimationVariants()}
        initial="hidden"
        animate="visible"
      >
        {displayText}
        {variant === 'typewriter' && currentIndex < text.length && (
          <motion.span
            className="inline-block w-0.5 h-6 bg-current ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <Component className="inline-block">
      {renderText()}
    </Component>
  );
}