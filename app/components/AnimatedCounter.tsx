'use client';
import React from 'react';
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number,
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  _duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number,
    let animationFrame: number,

    const _animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const _progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const _easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const _currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        _animationFrame = requestAnimationFrame(animate);
      }
    };

    _animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span _className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;