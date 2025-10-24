'use client';
import React from 'react';
import React, {useState, useEffect}from 'react';

interface AnimatedCounterProps {end: number,}
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;}const AnimatedCounter: React.FC<AnimatedCounterProps> = ({,
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''}) => {const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;,
    let animationFrame: number;,

    const animate = (currentTime: number) => {,
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);}}

    animationFrame = requestAnimationFrame(animate);

    return () => {if (animationFrame) {
        cancelAnimationFrame(animationFrame);}}
  }, [end, duration]);

  return(<span className={className)}>{prefix</span>}{count.toLocaleString()}{suffix} </span>
  );
};

export default AnimatedCounter;
'use client'
import React from 'react'
import React, { useState, useEffect } from 'react'
interface AnimatedCounterProps {
  end: number,
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ()
}) => {
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
    return (
    <React.Fragment>
      ) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])
  return() {prefix}, {count.toLocaleString()}, {suffix}
    </span>
    </React.Fragment>
  )
}
export default AnimatedCounter
