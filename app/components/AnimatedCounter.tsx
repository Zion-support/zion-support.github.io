<<<<<<< HEAD
=======
'use client';
<<<<<<< HEAD
import React from 'react';
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {end: number,}
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;}const AnimatedCounter: React.FC<AnimatedCounterProps> = ({,
=======
<<<<<<< HEAD
import React from 'react'
import React, { useState, useEffect } from 'react'
interface AnimatedCounterProps {
  end: number,
  duration?: number;
  prefix?: string
  suffix?: string
  className?: string
}

=======
import React, { useState, useEffect } from 'react';
interface AnimatedCounterProps {
  end: number
}
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
<<<<<<< HEAD
  className = ''}) => {const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;,
    let animationFrame: number;,

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
    const animate = (currentTime: number) => {,
=======
  className = ''
}) => {
<<<<<<< HEAD
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number
    let animationFrame: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

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
=======
return (;
const [count, setCount] = useState(0);
  useEffect(() => {;
let startTime: number;
    let animationFrame: number;
const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function for smooth animation;
const easeOutQuart = 1 - Math.pow(1 - progress, 4);
const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () =>
);
} {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }}, [end, duration]);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
