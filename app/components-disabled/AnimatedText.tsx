'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  delay = 0, 
  speed = 100, 
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={className}>
      <span>
        {displayedText}
        {showCursor && <span className="animate-pulse">|</span>}
      </span>
    </div>
  );
};

export default AnimatedText;
