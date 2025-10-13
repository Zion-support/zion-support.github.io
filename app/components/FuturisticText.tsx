import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface FuturisticTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const FuturisticText = ({ 
  text, 
  delay = 0, 
  speed = 100, 
  className,
  as: Component = 'span'
}: FuturisticTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText('');
        setIsComplete(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [delay]);

  return (
    <Component
      className={cn(
        'relative inline-block',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
        'after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-cyan-500/20 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300',
        className
      )}
    >
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse text-cyan-400">|</span>
      )}
    </Component>
  );
};

export default FuturisticText;