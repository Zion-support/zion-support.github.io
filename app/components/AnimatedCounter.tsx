<<<<<<< HEAD
import { React  useEffect useState useRef  from 'react'
import  useIntersectionObserver     } from '/hooks/useIntersectionObserver'
;
=======
>>>>>>> origin/main
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.5)
  });

  useEffect(() => {
    if (entry?.isIntersecting && !isVisible) {
      setIsVisible(true);
    }
  }, [entry, isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
=======

  useEffect(() => {
>>>>>>> origin/main
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span className={className}>
      {count.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;