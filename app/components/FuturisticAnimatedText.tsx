import React, { useEffect, useState } from 'react';

interface FuturisticAnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const FuturisticAnimatedText: React.FC<FuturisticAnimatedTextProps> = ({
  text,
  className = "",
  delay = 0,
  speed = 100
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + (currentIndex * speed));

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
};

export default FuturisticAnimatedText;