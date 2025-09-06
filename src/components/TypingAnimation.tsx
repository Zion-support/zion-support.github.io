import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
<<<<<<< HEAD
  showCursor = true,
  onComplete,
=======
  onComplete
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
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
    } else {
      setCurrentIndex(0);
    }
  }, [delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingAnimation;
