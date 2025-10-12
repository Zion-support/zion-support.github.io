'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'glitch' | 'typing' | 'fade' | 'slide';
  delay?: number;
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  variant = 'fade',
  delay = 0,
  speed = 100,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    if (variant === 'typing') {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      }
    } else if (variant === 'fade') {
      setDisplayText(text);
    } else if (variant === 'slide') {
      setDisplayText(text);
    } else if (variant === 'glitch') {
      setDisplayText(text);
    }
  }, [text, currentIndex, isVisible, variant, speed]);

  const getAnimationClasses = () => {
    switch (variant) {
      case 'glitch':
        return 'animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400';
      case 'typing':
        return 'text-white';
      case 'fade':
        return 'text-white animate-fade-in';
      case 'slide':
        return 'text-white animate-slide-in-up';
      default:
        return 'text-white';
    }
  };

  return (
    <span className={cn(getAnimationClasses(), className)}>
      {variant === 'typing' ? displayText : text}
    </span>
  );
};

export default AnimatedText;