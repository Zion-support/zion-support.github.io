'use client';
import React from 'react';
import React, {useState, useEffect}from 'react';

interface AnimatedCounterProps {end: number,}
  duration?: number;
  prefix?: string;
  suffix?: string;
<<<<<<< HEAD
  className?: string;
}

<<<<<<< HEAD
const AnimatedCounter: React.FC<AnimatedCounterProps> = ()
=======
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',)
  className = '')
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
}) => {
  const [count, setCount] = useState(0);
=======
  className?: string;}const AnimatedCounter: React.FC<AnimatedCounterProps> = ({,
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''}) => {const [count, setCount] = useState(0);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44

  useEffect(() => {
    let startTime: number;,
    let animationFrame: number;,

<<<<<<< HEAD
    const animate = (currentTime: number) => ;
=======
<<<<<<< HEAD
    const animate = (currentTime: number) => {,
=======
    const animate = (currentTime: number) => {;
>>>>>>> origin/main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

<<<<<<< HEAD
      if (progress < 1) 
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) 
        cancelAnimationFrame(animationFrame);
      }
    }
  }, [end, duration]);

<<<<<<< HEAD
  return() {prefix}, {count.toLocaleString()}, {suffix}
    </span>
=======
  return ()
    <span className={className}>)
      {prefix} {count.toLocaleString()} {suffix}
    </span></span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);}}

    animationFrame = requestAnimationFrame(animate);

    return () => {if (animationFrame) {
        cancelAnimationFrame(animationFrame);}}
  }, [end, duration]);

  return(<span className={className)}>{prefix</span>}{count.toLocaleString()}{suffix} </span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  );
};

export default AnimatedCounter;
