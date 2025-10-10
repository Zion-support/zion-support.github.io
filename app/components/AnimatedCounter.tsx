<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
interface AnimatedCounterProps {
  end: number,
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;}
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  ;

const [count, setCount] = useState(0)
  useEffect(() => {
    let startTime: number,
    let animationFrame: number,    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      ;

const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      setCount(currentCount)
      if (progress</AnimatedCounterProps> < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    animationFrame = requestAnimationFrame(animate);

return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])return (
    <span className={className}>
;

const AnimatedCounter: React.FC</span><AnimatedCounterProps>  = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let startTime: number,
    let animationFrame: number,
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress</AnimatedCounterProps> < 1) {
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
;
const AnimatedCounter: React.FC</span><AnimatedCounterProps> = ({;
  end,;
  duration = 2000,;
  prefix = '',;
  suffix = '',;
  className = '';}
}) => {;
  const [count, setCount] = useState(0);
;
  useEffect(() => {;
    let startTime: number,;
    let animationFrame: number,;
    const animate = (;
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
;
      // Easing function for smooth animation;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
;
      setCount(currentCount);
;
      if (progress</AnimatedCounterProps> < 1) {;) => {
  return (
    $3
  )}
        animationFrame = requestAnimationFrame(animate)}
      }
    }
    animationFrame = requestAnimationFrame(animate)
;

return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)}
      }
    };
  }, [end, duration]);
;
  return (;
    <span className={className}>;
      {prefix}{count.toLocaleString()}{suffix}
    </span>;
  );
};
export default AnimatedCounter;
  </AnimatedCounterProps>
=======
interface AnimatedCounterProps {
  end: number,
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
