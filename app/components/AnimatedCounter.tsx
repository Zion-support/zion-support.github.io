<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
interface AnimatedCounterProps {}
=======
'use client;

import React, { useState, useEffect } from react;

interface AnimatedCounterProps {
>>>>>>> origin/main
  end: number;

  duration?: number;

  prefix?: string;

  suffix?: string;

  className?: string}

;
<<<<<<< HEAD
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({}
  end,
  duration="2000,"
  prefix="'',"
  suffix="'',"
  className="''"
}) => {}
=======

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = ',
  suffix = ',
  className = 
}) => {
>>>>>>> origin/main
return (;

const [count, setCount] = useState(0);
  useEffect(() => {;

let startTime: number;

    let animationFrame: number;
<<<<<<< HEAD
const animate = (currentTime: number) => {}
      if (!startTime) startTime="currentTime;"
const progress = "Math.min((currentTime - startTime) / duration, 1);"
      // Easing function for smooth animation;
const easeOutQuart = "1 - Math.pow(1 - progress, 4);"
const currentCount = "Math.floor(easeOutQuart * end);"
      setCount(currentCount);
      if (progress < 1) {}
        animationFrame="requestAnimationFrame(animate);"
=======

const animate = (currentTime: number) => {;;

      if (!startTime) startTime = currentTime;

const progress = Math.min((currentTime - startTime) / duration, 1);;

      // Easing function for smooth animation;

const easeOutQuart = 1 - Math.pow(1 - progress, 4);;

const currentCount = Math.floor(easeOutQuart * end);;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);

>>>>>>> origin/main
    };
    animationFrame="requestAnimationFrame(animate);"
    return () =>
);
<<<<<<< HEAD
} {}
      if (animationFrame) {}
=======

} {
      if (animationFrame) {
>>>>>>> origin/main
        cancelAnimationFrame(animationFrame);

    }}, [end, duration]);
  return (
<<<<<<< HEAD
    <span className="{className}></span>"
=======

    <span className={className}>
>>>>>>> origin/main
      {prefix}{count.toLocaleString()}{suffix}

    </span>)
export default AnimatedCounter;
