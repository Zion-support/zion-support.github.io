import React, { useEffect, useRef, useState } from 'react';

interface FuturisticTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 100 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (currentIndex < text.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    } else {
      setIsComplete(true);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayedText('');
      setIsComplete(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`${className} ${isComplete ? 'animate-pulse' : ''}`}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-1"></span>
      )}
    </span>
  );
};

export default FuturisticText;