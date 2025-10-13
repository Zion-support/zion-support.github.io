import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FuturisticTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  gradient?: boolean;
  glow?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  text,
  delay = 0,
  speed = 100,
  className = '',
  as: Component = 'span',
  gradient = false,
  glow = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  const textClasses = `
    ${gradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400' : 'text-white'}
    ${glow ? 'drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]' : ''}
    ${className}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="inline-block"
    >
      <Component className={textClasses}>
        {displayedText}
        {currentIndex < text.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
          />
        )}
      </Component>
    </motion.div>
  );
};

export default FuturisticText;