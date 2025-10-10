'use client';
import React from 'react';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
interface AnimatedCounterProps {
  end: number,
=======
;
interface AnimatedCounterProps {;
  end: number,;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;}
}
<<<<<<< HEAD
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
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
=======
;
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({;
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
      if (progress < 1) {;) => {
  return (
    $3
  );
};
        animationFrame = requestAnimationFrame(animate);}
      }
    };
;
    animationFrame = requestAnimationFrame(animate);
;
    return () => {;
      if (animationFrame) {;
        cancelAnimationFrame(animationFrame);}
      }
    };
  }, [end, duration]);
;
  return (;
    <span className={className}>;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
      {prefix}{count.toLocaleString()}{suffix}
    </span>;
  );
};
<<<<<<< HEAD
export default AnimatedCounter;
  </AnimatedCounterProps>
=======
;
export default AnimatedCounter;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
