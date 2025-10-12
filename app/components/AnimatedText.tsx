import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 100
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + speed);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
};

export default AnimatedText;
