'use client';
import React, { useState, useEffect } from 'react';

import { useState, useEffect} from 'react';
interface AnimatedCounterProps {
  end: number;
'use client';

import React, {useState, useEffect} from 'react';

interface AnimatedCounterProps {end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = ''
}) => {
  suffix?: string;}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({end,
  duration = 2000,
  className = '',
  prefix = '',
  suffix = ''}) => {const [count, setCount] = useState(0);
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);}
    };

    animationFrame = requestAnimationFrame(animate);


  return <span>{count}{suffix}</span>;
    return () => {if (animationFrame) {
        cancelAnimationFrame(animationFrame);}
    };
  }, [end, duration]);

  return (
import React from 'react';

const AnimatedCounter: React.FC<AnimatedCounterProps> = () => {
  return (
    <div className="animatedcounter">
      <h2>AnimatedCounter</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default AnimatedCounter;
    <span className={className}>{prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
