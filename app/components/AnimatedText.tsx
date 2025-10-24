'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  useEffect(() => {
    if (!isAnimating || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isAnimating, currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {isAnimating && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default AnimatedText;