import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
}) => {
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
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default TypingAnimation;
