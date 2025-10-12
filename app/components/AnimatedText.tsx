'use client';
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'glow' | 'typing';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1000,
  type = 'fade'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (type === 'typing') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(text);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [text, currentIndex, delay, type]);

  const getAnimationClass = () => {
    switch (type) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide':
        return 'animate-slide-in';
      case 'glow':
        return 'animate-glow';
      case 'typing':
        return 'animate-typing';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <span className={`${getAnimationClass()} ${className}`}>
      {displayText}
    </span>
  );
};

export default AnimatedText;